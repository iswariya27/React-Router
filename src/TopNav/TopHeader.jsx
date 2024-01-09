import React from 'react';
import { Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logoimg from './Guvi-blog-logo.webp'

function TopHeader() {

    return (<>
        <div classNameName="container-img">
            <a href="https://blog.guvi.in/">
                <img src={logoimg} classNameName="img-guvi" alt="Guvi-blog-logo" /> </a>
        </div>
        <div className="nav-cont">
            <Navbar className="nav-menu" >
                <Navbar.Brand className='nav-cors' href="https://www.guvi.in/courses/"> Courses</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
                <Navbar.Collapse id="navbar-dark-example">
                    <Nav>
                        <NavDropdown className='dropname' title="Live classes"  >
                            <NavDropdown.Item href="https://www.guvi.in/full-stack-development-course-with-javascript-ZenclassName?utm_source=blog&amp;utm_medium=top_nav&amp;utm_campaign=main_menu_top&amp;utm_content=fsd">Full Stack Development Program (FSD)</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.guvi.in/IIT-Certified-Programming-Professional-and-Master-Data-Science?utm_source=blog&amp;utm_medium=top_nav&amp;utm_campaign=main_menu_top&amp;utm_content=data_science">IIT-M Advanced Programming &amp; Data Science Program</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.guvi.in/automation-testing-with-selenium?utm_source=blog&amp;utm_medium=top_nav&amp;utm_campaign=main_menu_top&amp;utm_content=automation_testing">Automation &amp; Testing Program</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav>
                        <NavDropdown className='dropname' title="Practice" >
                            <NavDropdown.Item href="https://www.guvi.in/code-kata?utm_source=blog&amp;utm_medium=top_nav&amp;utm_campaign=main_menu_top&amp;utm_content=code_kata">Codekata</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.guvi.in/webkata?utm_source=blog&amp;utm_medium=top_nav&amp;utm_campaign=main_menu_top&amp;utm_content=webkata">Webkata</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.guvi.in/ide?utm_source=blog&amp;utm_medium=top_nav&amp;utm_campaign=main_menu_top&amp;utm_content=ide">Forum Support</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav>
                        <NavDropdown className='dropname' title="Resources" >
                            <NavDropdown.Item href="https://www.guvi.in/rewards?utm_source=blog&amp;utm_medium=top_nav&amp;utm_campaign=main_menu_top&amp;utm_content=rewards">Rewards</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.guvi.in/referral?utm_source=blog&amp;utm_medium=top_nav&amp;utm_campaign=main_menu_top&amp;utm_content=referral">Referral</NavDropdown.Item>
                            <NavDropdown.Item href="https://forum.guvi.in/?utm_source=blog&amp;utm_medium=top_nav&amp;utm_campaign=main_menu_top&amp;utm_content=forum" className="elementor-sub-item menu-link">Forum Support</NavDropdown.Item>
                            <NavDropdown.Item href="https://blog.guvi.in/?utm_source=blog&amp;utm_medium=top_nav&amp;utm_campaign=main_menu_top&amp;utm_content=blog">Blogs</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav>
                        <NavDropdown className='dropname' title="Our Product" >
                            <NavDropdown.Item href="https://www.hackerkid.org/?utm_source=blog&amp;utm_medium=top_nav&amp;utm_campaign=main_menu_top&amp;utm_content=hackerkid">HackerKid</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.guvi.in/mlp/GUVI-for-corporates?utm_source=blog&amp;utm_medium=top_nav&amp;utm_campaign=main_menu_top&amp;utm_content=guvi_for_corp">GUVI for Corporates</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </div>
        <div className="l-div"> <a className='login' href='#'>Login</a></div>
        <div className="b-div"> <button className='signup'>Sign up</button></div>
    </>
    );
}

export default TopHeader;