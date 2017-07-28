
import express from 'express';

const router = express.Router();

// api endpoints
router.get('/', (req, res) => {
  
  res.json({
    
    min_version: '0.0.1'
    
  });
  
});
  
export default router;
