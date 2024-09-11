import { Link } from 'react-router-dom';
import '../../../styles/courses.css';


const CourseCard = (props) => {
    const { title, price, hours, image, videos, videoIntro, discount, duration, description, instructor } = props.course
    const defaultInstructorImage = 'https://scontent.fcai22-1.fna.fbcdn.net/v/t39.30808-6/298788431_3339666233024829_5300832238760280771_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=xgJJ_pQaQ7gQ7kNvgHR9tFC&_nc_ht=scontent.fcai22-1.fna&_nc_gid=AUBkRBw_vQsDKv6XjS2z5yo&oh=00_AYDi-FtHiHtZTZfZeZc_63kJ0CJ7IeHYMOIShNTgKLHEHg&oe=66E3C7BF';

    return (
        <div className="col-lg-4 col-md-6" >
            <div className="course-item  rounded-5 ">
                <div className=" position-relative rounded-5  ">
                    <img className="img-fluid w-100  mx-auto d-block" src={image} alt="صورة الدورة" />
                </div>
                <div className="  rounded-5 px-4 pb-2 pt-2 mt-n5">
                    <Link className="d-block text-center h3 mt-3 mb-4" to="/course-details">{title}</Link>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center">
                            <img className="rounded-circle flex-shrink-0" src={defaultInstructorImage} alt="المدرب" style={{ width: '45px', height: '45px' }} />
                            <div className="me-3">
                                <h6 className=" mb-1">{instructor.name}</h6>
                                <small>مدرب</small>
                            </div>
                        </div>
                        <span className=" text-white rounded-pill py-2 px-3">ج {price}</span>
                    </div>
                    <div className="row g-1">
                        <div className="col-4">
                            <div className="border-top border-3 border-primary pt-2">
                                <h6 className="text-primary mb-1">المدة:</h6>
                                <small>ساعات</small>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="border-top border-3 border-success pt-2">
                                <h6 className="text-success mb-1">الخصم:</h6>
                                <small>{discount}</small>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="border-top border-3 border-danger pt-2">
                                <h6 className="text-danger mb-1">فيديوهات:</h6>
                                <small>50</small>
                            </div>
                        </div>
                        <button>
                            اضافه الي السله
                            <i className='fa fa-shopping-bag'></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
