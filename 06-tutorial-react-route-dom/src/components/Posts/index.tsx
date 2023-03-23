import { Outlet, useParams, useSearchParams } from 'react-router-dom'
import './style.css'

export const Posts = () => {
  const params = useParams()
  const {id} = params
  const [qs, setqs] = useSearchParams()
  console.log(params);
  // http://127.0.0.1:5173/posts/10?page=120&segundo=blabla
  
  return (
    <div>
      {/* <h1>Post {`Param: ${id}`} {`Query String: ${qs.get('page')}`}</h1>
      <h1>Post {`Param: ${id}`} {`Query String: ${qs.get('segundo')}`}</h1> */}
      <h1>Post {`Param: ${id}`} {`Query String: ${qs}`}</h1>
      <Outlet />
    </div>
  )
}
