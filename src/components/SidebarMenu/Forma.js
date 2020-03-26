import React from 'react';
const Forma = props => {
    const style = {
            display: "flex",
                justifyContent: "center",
                alignItems: "center"
            
    }
    const divStyle = {
        marginBottom: "10px"
    }
    const inputStyle ={padding:"5px"}
return (
<div className='forma' style={{height: "100vh"}}>
            <div className="overlay" style={style}>
                <form action="#" style={{padding: "40px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
}}>
                    <div style={divStyle}>
                        <input type="text" style={inputStyle} placeholder="Your Name" />
                    </div>
                    <div style={divStyle}>
                        <input type="text" style={inputStyle} placeholder="Your Last Name" />
                    </div>
                    <div style={divStyle}>
                        <input type="email"  style={inputStyle} placeholder="Your Email" />
                    </div>
                    <div style={divStyle}>
                        <input type="number" style={inputStyle} placeholder="Your Phone Number" />
                    </div>
                    <button className="filter-btn" type="submit">submit</button>
                </form>
        </div>
</div>
);
}
export default Forma;