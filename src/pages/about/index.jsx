import { useQuery } from "react-query";
import { instance } from "../../components/axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Card } from 'antd';
const { Meta } = Card;

export default function About() {
  const getUsers = () => {
    return(
      instance
      .get("api/users?page=2",)
      .then((res)=>res.data.data)
    )
  };
  // toast.success("Successfully  Get");
  const gets = useQuery( {queryKey: ['userla'], queryFn :getUsers});
  console.log(gets);

  return(  
    <>
      <div className="gets">
        <h1>About page</h1>
        <div get_container>
          {gets.data?.map((item)=>(
            <Card
            hoverable
            style={{
              width: 240, display: "inline-flex", margin:"15px", 
            }}
          >
           <Link to={`/single/${item.id}`}>
           <div> <img src={item.avatar} alt="rasm bor "/></div>
           </Link>
            <h2>{item.first_name}</h2>
            <h2>{item.last_name}</h2>
            <a> {item.email} </a>
            <Meta title="Europe Street beat" description="www.instagram.com" />
          
          </Card>
          ))} 
        </div>
      </div>
    </>
  )
};