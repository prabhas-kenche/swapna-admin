import './index.css'

const Header = () => {
    return (
        <div className='navbar-container'>
            <img src="https://res.cloudinary.com/dagkvnqd9/image/upload/v1726917662/WhatsApp_Image_2024-09-13_at_9.33.52_PM-removebg_oalbnc.png" alt='logo' className="swapna-logo"/>

            <div className='menu-item active'>
                <h1>Dashboard</h1>
            </div>

            <hr/>

            <h1 className="section-title">Management</h1>
            <div className='menu-item'>
                
                <h1>Document</h1>
            </div>

            <div className='menu-item'>
                
                <h1>Contact</h1>
            </div>

            <div className='menu-item'>
                
                <h1>Prospect</h1>
            </div>

            <div className='menu-item'>
                
                <h1>Workflow</h1>
            </div>

            <hr/>

            <h1 className="section-title">Connection</h1>
            <div className='menu-item'>
                
                <h1>Chat Integration</h1>
            </div>

            <div className='menu-item'>
                
                <h1>Marketing Automation</h1>
            </div>

            <div className='menu-item'>
                
                <h1>Email Integration</h1>
            </div>

            <hr/>

            <h1 className="section-title">Customer</h1>
            <div className='menu-item'>
                
                <h1>Transaction</h1>
            </div>

            <div className='menu-item'>
                <h1>Maintenance</h1>
            </div>
        </div>
    )
}

export default Header;
