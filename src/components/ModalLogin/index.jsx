import React from 'react'

const ModalLogin = () => {
  return (
      <div className="modal modallogin">
        <div className="modal__wrapper">
          <div className="modal__wrapper-close">
            <img src="img/close_icon.svg" alt="CFD Register" />
          </div>
          <div className="modal__wrapper-content mdlogin">
            <h3 className="title --t3">Đăng nhập</h3>
            <div className="social">
              <a className="btn btn--google" href="#"><i><img src="img/icon-google.svg" alt="Google CFD" /></i><span>Đăng ký bằng Google</span></a>
              <a className="btn btn--facebook" href="#"><i><img src="img/icon-facebook-v2.svg" alt="Google CFD" /></i><span>Đăng ký bằng Google</span></a>
            </div>
            <span className="line">Hoặc</span>
            <form action="#" className="form">
              <input type="email" className="form__input" name="name" placeholder="Địa chỉ email" />
              <input type="password" className="form__input" name="name" placeholder="Mật khẩu" />
              <div className="form__bottom">
                <p>
                  Bạn chưa có tài khoản?
                  <span className="color--primary btnmodal" data-modal="mdregister">Đăng ký</span>
                </p>
                <a className="color--primary" href="#">Quên mật khẩu?</a>
              </div>
              <button className="btn btn--primary form__btn-register" type="submit">
                Đăng nhập
              </button>
            </form>
          </div>
          <div className="modal__wrapper-content mdregister">
            <h3 className="title --t3">Đăng ký tài khoản</h3>
            <div className="social">
              <a className="btn btn--google" href="#"><i><img src="img/icon-google.svg" alt="Google CFD" /></i><span>Đăng ký bằng Google</span></a>
              <a className="btn btn--facebook" href="#"><i><img src="img/icon-facebook-v2.svg" alt="Google CFD" /></i><span>Đăng ký bằng Google</span></a>
            </div>
            <span className="line">Hoặc</span>
            <form action="#" className="form">
              <input type="text" className="form__input" name="name" placeholder="Họ và tên" />
              <input type="email" className="form__input" name="name" placeholder="Địa chỉ email" />
              <input type="password" className="form__input" name="name" placeholder="Mật khẩu" />
              <p className="form__argee">
                Với việc đăng ký, bạn đã đồng ý
                <a className="color--primary" href="#">Chính Sách</a> &amp;
                <a className="color--primary" href="#">Điều Khoản</a> của CFD
              </p>
              <button className="btn btn--primary form__btn-register" type="submit">
                Đăng ký
              </button>
            </form>
          </div>
          <div className="modal__wrapper-content mdconsult">
            <h3 className="title --t3">Đăng ký tư vấn</h3>
            <form action="#" className="form">
              <input type="text" className="form__input" name="name" placeholder="Họ và tên" />
              <input type="text" className="form__input" name="name" placeholder="Số điện thoại" />
              <input type="text" className="form__input" name="email" placeholder="Email" />
              <textarea name id cols={30} rows={4} className="form__input" placeholder="Nội dung cần tư vấn" defaultValue={""} />
              <button className="btn btn--primary form__btn-register" type="submit">
                Gửi thông tin
              </button>
            </form>
          </div>
        </div>
        <div className="modal__overlay" />
      </div>
    );
  }
  
export default ModalLogin