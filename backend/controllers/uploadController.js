const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  try {
    res.json({ secure_url: req.file.path });
  } catch (error) {
    console.error('Error during file upload:', error);
    res.status(500).send('Internal server error');
  }
};

export { uploadImage };
