import React from 'react';
import { withFormik, Field, Form } from 'formik';
import { Editor } from 'react-draft-wysiwyg';
import Yup from 'yup';

import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const CreationForm = ({ values, error }) => {
  return (
    <Form>
      <div className="row">
        <div className="form-group col-9">
          <label htmlFor="">Name:</label>
          <Field type="text" className="form-control" name="name" />
        </div>

        <div className="form-group col-sm">
          <label htmlFor="">Year of Induction:</label>
          <Field type="number" className="form-control" name="year" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="">Biography</label>
        <Editor
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          name="bio"
        />
      </div>

      <div className="form-group">
        <label htmlFor="">Main Image (optional)</label>
        <Field type="text" className="form-control" name="img" />
      </div>

      <div className="form-group">
        <label htmlFor="">Link to Video</label>
        <Field type="url" className="form-control" name="video" />
      </div>

      <div className="form-group">
        <label htmlFor="">Member Type:</label>
        <Field component="select" className="form-control" name="member_type" />
      </div>

      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Show with Inductees
        </label>
      </div>
    </Form>
  );
};

/*

{
  "name": "",
  "year": "",
  "bio": "",
  "image": "",
  "video": "",
  "member_type": "",
  "show_with_inductees": true,
  "memorabilia": [
    {
      "title": "",
      "year": "",
      "image": "",
      "description": ""
    },
    {
      "title": "",
      "year": "",
      "image": "",
      "description": ""
    }
  ]
}

*/

const CreateMemberForm = withFormik({
  mapPropsToValues({ name, year }) {
    return {
      name: name || '',
      year: year || ''
    };
  }
})(CreationForm);

export default CreateMemberForm;
