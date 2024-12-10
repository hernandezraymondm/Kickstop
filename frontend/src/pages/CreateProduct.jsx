import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import LoadingDots from '../components/Loader/LoadingDots';

const CreateProduct = () => {
  const [name, setName] = useState('');
  const [priceInPesos, setPriceInPesos] = useState('');
  const [category, setCategory] = useState('');
  const [target, setTarget] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const token = localStorage.getItem('NotAToken');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImg(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImgPreview(null);
    }
  };

  const uploadFile = async () => {
    if (!img) {
      enqueueSnackbar('No image selected', { variant: 'warning' });
      return;
    }

    const data = new FormData();
    data.append('file', img);

    try {
      const uploadUrl = `${
        import.meta.env.VITE_REACT_APP_BACKEND_BASEURL
      }/upload/image`;
      const res = await axios.post(uploadUrl, data);

      const { secure_url } = res.data;
      console.log('Uploaded image url: ', secure_url);
      enqueueSnackbar('Image uploaded successfully', { variant: 'success' });
      return secure_url;
    } catch (error) {
      console.error('Upload error', error);
      enqueueSnackbar('Failed to upload an image', { variant: 'error' });
    }
  };

  const handleSaveProduct = async () => {
    if (!name || !priceInPesos || !category || !target) {
      enqueueSnackbar('Please fill all required fields', {
        variant: 'warning',
      });
      return;
    }

    const priceInCents = Math.round(parseFloat(priceInPesos) * 100); // Convert pesos to cents
    if (isNaN(priceInCents) || priceInCents <= 0) {
      enqueueSnackbar('Price must be a positive number', {
        variant: 'warning',
      });
      return;
    }

    setLoading(true);

    try {
      const uploadedImageUrl = await uploadFile();
      if (!uploadedImageUrl) {
        throw new Error('Image upload failed');
      }

      const formData = {
        name,
        priceInCents,
        category,
        target,
        description,
        image: uploadedImageUrl,
      };

      await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/product`,
        formData,
        config
      );

      enqueueSnackbar('Product saved successfully', { variant: 'success' });
      navigate('/admin');
    } catch (error) {
      console.error('Error:', error);
      enqueueSnackbar(
        'Error saving product: ' +
          (error.response?.data?.message || error.message),
        { variant: 'error' }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-2 bg-base-100 flex justify-center items-center">
      <div className="container max-w-lg shadow-lg rounded-lg p-5 bg-base-100">
        <Link
          to="/admin"
          className="flex justify-center items-center btn mb-4 w-12 py-2 px-8 text-sm rounded-xl"
        >
          Back
        </Link>
        <div className="flex justify-start items-center gap-3">
          <h1 className="text-3xl font-semibold my-4">Create Product</h1>
          {loading && (
            <span className="loading loading-spinner text-secondary" />
          )}
        </div>
        <div className="my-4">
          <label htmlFor="name" className="block text-lg mb-2 mt-4">
            Name
          </label>
          <input
            id="name"
            disabled={loading}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered input-accent w-full px-4 py-2"
          />

          <label htmlFor="priceInPesos" className="block text-lg mb-2 mt-4">
            Price (₱)
          </label>
          <input
            id="priceInPesos"
            disabled={loading}
            type="text"
            value={priceInPesos}
            onChange={(e) => setPriceInPesos(e.target.value)}
            className="input input-bordered input-accent w-full px-4 py-2"
            step="0.01"
          />

          <label htmlFor="category" className="block text-lg mb-2 mt-4">
            Category
          </label>
          <select
            id="category"
            disabled={loading}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-accent w-full px-4 py-2"
            required
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="Featured">Featured</option>
            <option value="Sports">Sports</option>
            <option value="Collection">Collection</option>
          </select>

          <label htmlFor="target" className="block text-lg mb-2 mt-4">
            Target
          </label>
          <select
            id="target"
            disabled={loading}
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="select select-accent w-full px-4 py-2"
            required
          >
            <option value="" disabled>
              Select target
            </option>

            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>

          <label htmlFor="description" className="block text-lg mb-2 mt-4">
            Description
          </label>
          <textarea
            id="description"
            disabled={loading}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-accent w-full px-4 py-2"
          />

          <label htmlFor="img" className="block text-lg my-2 ">
            Upload Image
          </label>
          <input
            id="img"
            disabled={loading}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="file-input file-input-bordered input-accent w-full"
            required
          />

          {imgPreview && (
            <div className="my-4">
              <img
                src={imgPreview}
                alt="Preview"
                className="max-w-full h-auto"
              />
            </div>
          )}

          <button
            onClick={handleSaveProduct}
            disabled={loading}
            className="w-full bg-green-500
                            hover:bg-green-800 text-white py-2 px-4 rounded-md mt-6"
          >
            {loading ? (
              <div className="flex justify-center items-center gap-2">
                <p>Saving</p>
                <LoadingDots size={'loading-xs'} />
              </div>
            ) : (
              'Save'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
