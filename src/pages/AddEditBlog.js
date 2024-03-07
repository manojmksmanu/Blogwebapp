import React, { useState, useEffect } from 'react';
import ReactTagInput from '@pathofdev/react-tag-input';
import "@pathofdev/react-tag-input/build/index.css"
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase';

const initialState = {
  title: '',
  tags: [],
  trending: "no",
  category: "",
  description: ""
}
const categoryOption = [
  "Fashion",
  "Technology",
  "Food",
  "Politics",
  "Sports",
  "Business"
]

const AddEditBlog = () => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [progess, setProgess] = useState(null);
  const { title, tags, category, trending, description } = form;

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is" + progress + "% done")
        setProgess(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("upload is paused");
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }

      }, (error) => {
        console.log(error)
      },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl)=>{
            setForm((prev)=>({
              ...prev,imgUrl:downloadUrl
            }))
          })
        }
      );


    }
    file && uploadFile();
  },[file])

  const handleChange = (e) => {

  }
  const handleTags = (e) => {

  }
  const handleTrending = (e) => {

  }
  const onCategoryChange = (e) => {

  }
  return (
    <div className='container-fluid mb-4'>
      <div className='container'>
        <div className='col-12'>
          <div className='text-center heading py-2'>
            Create Blogs
          </div>
        </div>
        <div className='row h-100 justify-content-center align-items-center'>
          <div className='col-10 col-md-8 col-lg-6'>
            <form className='row blog-form'>
              <div className='col-12 py-3'>
                <input
                  type='text'
                  className='form-control input-text-box'
                  placeholder='Title'
                  name='title'
                  value={title}
                  onChange={handleChange}
                />
              </div>
              <div className='col-12 py-3'>
                <ReactTagInput
                  tags={tags}
                  placeholder='Tags'
                  onChange={handleTags}
                />
              </div>
              <div className='col-12 py-3'>
                <p className='trending'>
                  Is it trending blog?
                </p>
                <div className='form-check-inline mx-2'>
                  <input
                    type='radio'
                    className='form-check-input'
                    name='radioOption'
                    value="yes"
                    checked={trending === "yes"}
                    onChange={handleTrending}
                  />
                  <label htmlFor='radioOption' className='form-check-label'>
                    Yes&nbsp;
                  </label>
                  <input
                    type='radio'
                    className='form-check-input'
                    name='radioOption'
                    value="no"
                    checked={trending === "no"}
                    onChange={handleTrending}
                  />
                  <label htmlFor='radioOption' className='form-check-label'>
                    No&nbsp;
                  </label>
                </div>
              </div>
              <div className='col-12 py-3'>
                <select value={category} onChange={onCategoryChange} className='catg-dropdown'>
                  <option>Please Select Category</option>
                  {
                    categoryOption.map((option, index) => {
                      (
                        <option value={option || ""} key={index}>
                          {option}
                        </option>
                      )
                    })
                  }
                </select>
              </div>

              <div className='col-12 py-3'>
                <textarea
                  className='form-control description-box'
                  placeholder='Description'
                  value={description}
                  name='description'
                  onChange={handleChange}
                />
              </div>
              <div className='mb-3'>
                <input
                  type='file'
                  className='form-control'
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <div className='col-12 py-3 text-center'>
                <button className='btn btn-add' type="submit"
                disabled ={ progess !==null & progess<100}
                >submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEditBlog