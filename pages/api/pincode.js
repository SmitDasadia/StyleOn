// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let pinCodes = {
    "360001": ["Rajkot","Gujarat","India"],
    "380001": ["Ahemdabad","Gujarat","India"],
    "391740": ["Vadodara","Gujarat","India"],
    "395003": ["Surat","Gujarat","India"],
    "382010": ["Gandhinagar","Gujarat","India"],
  }
    res.status(200).json(pinCodes)
  }
  

  360001,380001,391740,395003,382010