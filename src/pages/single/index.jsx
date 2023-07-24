import { useQuery } from "react-query";
import { instance } from "../../components/axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card } from 'antd';
import { toast } from "react-toastify";
const { Meta } = Card;

export default function Single() {
  const { id } = useParams();
  console.log(id);
  const nav = useNavigate();
  const singUsers = () => {
    return(
      instance
      .get(`api/users/${id}`,)
      .then((res)=>res.data.data)
    )
  };
  
  const{data, success, isError, isLoading} = useQuery( {queryKey: ['usercha'], 
  queryFn :singUsers });
  console.log(data);

  if (success) { toast.success("Successfully single")}
  if (isError) { toast.error("Error single")}

  return(
    <>
      <div>
        <Link to="/"><h1>Single page</h1></Link>
        <div>
          <Card
              hoverable
              style={{
              width: 240,
              }}
            >
              <div> <img src={data?.avatar} alt="rasm bor " /></div>
              <h2>{data?.first_name}</h2>
              <h2>{data?.last_name}</h2>
              <a> {data?.email} </a>
              <div className="btnlar">
                <Link to="/"><button>delete</button></Link>
                <Link to="/create"><button>create</button></Link>
                <Link to={`/update/${data?.id}`}><button>update</button></Link>
              </div>
              <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
      </div>
    </>
  )
};