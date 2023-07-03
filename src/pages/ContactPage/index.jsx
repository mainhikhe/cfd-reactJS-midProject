import React, { useState } from "react";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { validate } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const rules = {
    name: [{ required: true, message: "" }],
    email: [{ required: true }, { regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ }],
    phone: [{ required: true }, { regex: /(84|0[3|5|7|8|9])+([0-9]{8})\b/ }],
    topic: [{ required: true, message: "Vui lòng chọn khóa học" }],
    content: [{ required: true }],
  };

  // Validate form

  // let errorObj = {};
  // if (!!!form.name?.trim()) {
  //   errorObj.name = "Vui lòng nhập tên";
  // }

  // if (!!!form.email?.trim()) {
  //   errorObj.email = "Vui lòng nhập Email";
  // } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
  //   errorObj.email = "Vui lòng nhập đúng định dạng Email";
  // }

  // if (!!!form.phone?.trim()) {
  //   errorObj.phone = "Vui lòng nhập Phone";
  // } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(form.phone)) {
  //   errorObj.phone = "Vui lòng nhập đúng định dạng Phone";
  // }

  // if (!!!form.topic?.trim()) {
  //   errorObj.topic = "Vui lòng chọn khóa học";
  // }
  // if (!!!form.content?.trim()) {
  //   errorObj.content = "Vui lòng nhập nội dung";
  // }
  const onSubmit = () => {
    console.log("form", form);
    const errorObject = validate(rules, form);
    setErrors(errorObject);
    console.log(errorObject);

    // Check err => err? fail: success
    if (Object.keys(errorObject)?.length === 0) {
      // alert("Submit success!");
      navigate("/");
      console.log("Validate success");
    } else {
      console.log("errors", errors);
    }
  };
  const register = (fieldName) => {
    return {
      value: form[fieldName],
      error: errors[fieldName],
      onChange: (e) => setForm({ ...form, [fieldName]: e.target.value }),
    };
  };
  return (
    <main className="mainwrapper contact --ptop">
      <div className="container">
        <div className="textbox">
          <h2 className="title --t2">Liên hệ &amp; Hỗ trợ</h2>
          <p className="desc">
            Bạn có bất cứ thắc mắc nào thì đừng ngần ngại liên hệ để được hỗ
            trợ?
            <br />
            Chúng tôi luôn ở đây
          </p>
        </div>
      </div>
      <div className="contact__content">
        <div className="container">
          <div className="wrapper">
            <div className="sidebar">
              <div className="sidebar__address infor">
                <div className="infor__item">
                  <label className="label">CFD Circle</label>
                  <p className="title --t4">
                    666/46/29 Ba Tháng Hai, phường 14, quận 10, TPHCM
                  </p>
                </div>
                <div className="infor__item">
                  <label className="label">Email</label>
                  <p className="title --t4">info@cfdcircle.vn</p>
                </div>
                <div className="infor__item">
                  <label className="label">Số điện thoại</label>
                  <p className="title --t4">098 9596 913</p>
                </div>
              </div>
              <div className="sidebar__business">
                <p>
                  Đối với yêu cầu kinh doanh xin vui lòng gửi cho chúng tôi tại:
                </p>
                <a href="#">business@cfdcircle.vn</a>
              </div>
              <a href="#" className="sidebar__messenger btn btn--primary">
                Trò chuyện trực tuyến
              </a>
            </div>
            <div className="form">
              <h3 className="title --t3">Gửi yêu cầu hỗ trợ</h3>
              <div className="form-group">
                {/* <label className="label">
                  Họ và tên <span>*</span>
                </label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  type="text"
                  className={`form__input ${!!errors.name ? "formerror" : ""}`}
                />
                <p className="error">{errors.name || ""}</p> */}

                <Input
                  placeholder="Nhập họ và tên"
                  label="Họ và tên"
                  required
                  {...register("name")}
                />
              </div>
              <div className="form-group">
                <Input
                  placeholder="Nhập Email"
                  label="Email"
                  required
                  {...register("email")}
                />
              </div>
              <div className="form-group">
                <Input
                  placeholder="Nhập Số điện thoại"
                  label="Số điện thoại"
                  required
                  {...register("phone")}
                />
              </div>
              <div className="form-group">
                <Select
                  label={"Chủ đề cần hỗ trợ"}
                  required
                  options={[
                    {
                      value: "",
                      label: "--",
                    },
                    {
                      value: "res",
                      label: "Web Responsive",
                    },
                    {
                      value: "react",
                      label: "React",
                    },
                  ]}
                  {...register("topic")}
                />
              </div>
              <div className="form-group">
                <Input
                  placeholder="Nhập nội dung"
                  label="Nội dung"
                  required
                  renderProps={(inputProps) => (
                    <textarea
                      className={`form__input ${
                        !!inputProps.error ? "formerror" : ""
                      }`}
                      {...inputProps}
                    />
                  )}
                  {...register("content")}
                />
              </div>
              <div className="btncontrol">
                <button className="btn btn--primary" onClick={onSubmit}>
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Contact;
