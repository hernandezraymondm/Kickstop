import express from 'express';
import { Product } from '../models/productModel.js';
import { verifyToken } from '../middleware/verifyToken.js';
import { v2 as cloudinary } from 'cloudinary';

const router = express.Router();

//CREATE NEW PRODUCT ROUTE
router.post('/', verifyToken, async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.priceInCents ||
      !request.body.category ||
      !request.body.target ||
      !request.body.image
    ) {
      return response.status(400).send({
        message: 'Required fields are missing',
      });
    }

    const newProduct = {
      name: request.body.name,
      priceInCents: request.body.priceInCents,
      category: request.body.category,
      target: request.body.target,
      description: request.body.description,
      image: request.body.image,
    };

    const product = await Product.create(newProduct);

    return response.status(201).send(product);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//GET ALL PRODUCTS ROUTE
router.get('/', async (request, response) => {
  try {
    const product = await Product.find({});

    return response.status(200).json({
      data: product,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//GET PRODUCT ROUTE
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const product = await Product.findById(id);

    return response.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//UPDATE PRODUCT ROUTE
router.put('/:id', verifyToken, async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.priceInCents ||
      !request.body.category ||
      !request.body.target
    ) {
      return response.status(400).send({
        message: 'Required fields are missing',
      });
    }

    const { id } = request.params;

    const result = await Product.findByIdAndUpdate(id, request.body, {
      new: true,
    });

    if (!result) {
      return response.status(404).json({ message: 'Product not found' });
    }

    return response.status(200).send({ message: 'Product updated' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// DELETE PRODUCT ROUTE
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the product from the database
    const result = await Product.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Extract the public ID from the Cloudinary URL
    const imageUrl = result.image; // Assuming 'image' contains the full Cloudinary URL
    if (imageUrl) {
      const urlSegments = imageUrl.split('/');
      const publicIdWithExtension = urlSegments.slice(-2).join('/'); // Get the last two segments
      const publicId = publicIdWithExtension.split('.').slice(0, -1).join('.'); // Remove the file extension

      // Log the extracted public ID to verify
      console.log('Extracted Public ID:', publicId);

      // Delete the image from Cloudinary
      const cloudinaryResult = await cloudinary.uploader.destroy(publicId);
      console.log('Deleted from Cloudinary:', cloudinaryResult);
    }

    res.status(200).json({
      message: 'Product and associated image successfully deleted',
      deletedItem: result,
    });
  } catch (error) {
    console.error('Error deleting product or image:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//DELETE PRODUCT ROUTE
// router.delete('/:id', auth, async (request, response) => {
//   try {
//     const { id } = request.params;
//     const result = await Product.findByIdAndDelete(id);
//     if (!result) {
//       return response.status(404).json({ message: 'Product not found' });
//     }

//     response
//       .status(200)
//       .json({ message: 'Product successfully deleted', deletedItem: result });
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

export default router;
