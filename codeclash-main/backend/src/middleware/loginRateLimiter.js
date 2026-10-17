
const redisClient = require('../config/redis');

const loginRateLimiter = async (req, res, next) => {
    try {
        const ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress;
        
      
        const windowMinutes = Math.floor(Date.now() / (15 * 60 * 1000)); // 15 minutes
        const key = `login_attempts:${ip}:${windowMinutes}`;

       
        const attempts = await redisClient.incr(key);

        
        if (attempts === 1) {
            await redisClient.expire(key, 15 * 60); // 15 minutes in seconds
        }

       
        const MAX_ATTEMPTS = 10; // 5 attempts per 15 minutes

       
        if (attempts > MAX_ATTEMPTS) {
            const ttl = await redisClient.ttl(key); // Seconds remaining
            
            return res.status(429).json({
                success: false,
                error: `Too many login attempts. Please try again after ${Math.ceil(ttl / 60)} minutes.`,
                retryAfter: ttl,
                limit: MAX_ATTEMPTS,
                attempts: attempts
            });
        }

        
        res.setHeader('X-RateLimit-Limit', MAX_ATTEMPTS);
        res.setHeader('X-RateLimit-Remaining', MAX_ATTEMPTS - attempts);
        res.setHeader('X-RateLimit-Reset', Math.floor(Date.now() / 1000) + (15 * 60));

    
        next();

    } catch (error) {
        console.error('Login Rate Limiter Error:', error);
        next();
    }
};

module.exports = loginRateLimiter;