import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserItem.css"

function UserItem({ info, el }) {
    return (
        <div>
            <Card
            className="usercard"
                style={{
                    width: "22rem",
                    color: "#e1ebfd",
                    height: "550px",
                    marginTop: "20px",
                    backgroundColor:"#19142ec5"
                }}
            >
                <Card.Body style={{backgroundColor:'#19142ec5',  height: "500px",}}>
                    <Card.Title className="text"> <img src="https://www.freeiconspng.com/uploads/go-back--gallery-for--contact-person-icon-png-21.png" width="30px" alt="contact" style={{backgroundColor:'#19142ec5'}}/> {info.name}</Card.Title>
                    <Card.Text className="text" style={{marginTop:'15px'}}>
                        <b>Username :</b> {info.username}
                    </Card.Text>
                    <hr />

                    <Card.Text className="text">
                        <b>Company :</b> {info.company.name}
                    </Card.Text>
                    <hr />
                    <Card.Text className="text">
                        <b>Catch phrase :</b> {info.company.catchPhrase}
                    </Card.Text>

                    <hr />
                    <Card.Text className="text">
                        <b>Email :</b> {info.email}
                    </Card.Text>
                    <Card.Text className="text">
                        <hr />
                        <b>Phone :  </b> {info.phone}
                    </Card.Text>
                    <Card.Text className="text" >
                    <hr />
                        <b>Adress : </b>
                        {info.address.street}
                        <br/>
                        </Card.Text>
                    <Card.Text className="text">
                    <hr />
                        <b>   Zip code : </b>
                        {info.address.zipcode}
                    </Card.Text>
                    
                    <Button className="btn" variant="primary" style={{backgroundColor:'#4B1E49' ,border:'none', marginLeft:'15px' }}>Go to {info.username}'s website</Button>
                </Card.Body>
            
                 
                   
                
            </Card>
        </div>
    );
}

export default UserItem;
