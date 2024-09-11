import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
import '../../styles/navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [bg, setBg] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handelChange = () => {
        setBg(!bg)
    }

    return (
        <nav className={`navbar navbar-expand-lg py-2 fixed-top ${scrolled || bg ? 'navbar-scrolled' : ''} `}>
            <div className='container-xxl pb-1'>
                <NavLink to="/" className="navbar-brand">
                    <img src={logo} alt="Logo" />
                </NavLink>
                <span onClick={handelChange} className=" d-block d-lg-none  fa fa-bars text-info fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"></span>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav position-relative mx-auto py-0">
                        {/* Home */}

                        <NavLink
                            to="/"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        >
                            الرئيسية
                        </NavLink>
                        {/* About */}
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        >
                            من نحن
                        </NavLink>
                        {/* Courses */}
                        <NavLink
                            to="/courses"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        >
                            كورسات
                        </NavLink>
                        {/* books */}
                        <NavLink
                            to="/books"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        >
                            الكتب
                        </NavLink>
                        {/* Events */}
                        <NavLink
                            to="/events"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        >
                            فعاليتنا
                        </NavLink>
                        {/* Services */}
                        <NavLink
                            to="/services"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        >
                            خدماتنا
                        </NavLink>
                        {/* Article */}
                        <NavLink
                            to="/article"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        >
                            المقالات
                        </NavLink>
                        {/* Contact Us */}
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        >
                            اتصل بنا
                        </NavLink>
                        <NavLink
                            to="/cart"
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''} d-flex align-items-center`}
                        >
                            عربة التسوق
                            <i className='fa fa-shopping-basket text-info  mx-2'></i>
                        </NavLink>
                    </div>
                    {/* <Link to={'/login'} className='text-light login'>تسجيل الدخول</Link>
                    <button type="button" className="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal">
                        <i className="fa fa-search"></i>
                    </button> */}
                    <div className="dropdown">
                        <button
                            className="btn text-info dropdown-toggle d-flex align-items-center"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img
                                src='https://scontent.fcai22-1.fna.fbcdn.net/v/t39.30808-6/298788431_3339666233024829_5300832238760280771_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=xgJJ_pQaQ7gQ7kNvgHR9tFC&_nc_ht=scontent.fcai22-1.fna&_nc_gid=AUBkRBw_vQsDKv6XjS2z5yo&oh=00_AYDi-FtHiHtZTZfZeZc_63kJ0CJ7IeHYMOIShNTgKLHEHg&oe=66E3C7BF'
                                alt="Profile"
                                className="rounded-circle"
                                style={{ width: '40px', height: '40px' }}
                            />
                            <span className="ms-2">Abdelrhman</span>
                        </button>
                        <ul className="dropdown-menu  w-100 text-center" aria-labelledby="dropdownMenuButton">
                            <li><Link className="dropdown-item fw-bold" to="/account/user"> الملف الشخصي مستخدم</Link></li>
                            <li><Link className="dropdown-item fw-bold" to="/account/teacher">الملف الشخصي مدرس</Link></li>
                            <li><Link className="dropdown-item fw-bold" to="/admin"> لوحه التحكم</Link></li>
                            <li><Link className="dropdown-item text-danger fw-bold" to="/register">تسجيل الدخول</Link></li>
                            <li><Link className="dropdown-item text-danger fw-bold" to="/login">تسجيل الخروج</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
