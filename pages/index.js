import {useEffect,useState} from 'react'
import MediaCard from "../components/MediaCard"
import styles from "../styles/Home.module.scss"
import InfiniteScroll from "react-infinite-scroll-component";
import ReactLoading from 'react-loading';
export default function Home({result}) {
  const [data,setData] = useState(result || [])
  const [more ,setMore] = useState(true)
  const [page ,setPage] = useState(0)
  useEffect(() => {
    console.log(result)
  }, [result])
  const fetchMoreData=async()=>{
    const res = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?offset=${page+20}&order=by-opening-date&api-key=4uougZbpvnTcVHrWOGPremISgSzQGYod`)
    const result = await res.json()
    setData([...data,...result.results])
    setPage(page+20)
    }
  return (
    <>
      <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={true}
          loader={ <div style={{width:"100%",display:"flex",justifyContent:"center",marginBottom:"10px"}}><ReactLoading type="spin" color="#fff" height={70} width={70} /></div>}
        > <main className={styles.container}>
           {data.map(i=>{
             let src
             if(i.multimedia === undefined || i.multimedia === null){
              src = "https://www.labikineria.shop/assets/images/no_image.png"
             }else{
               src=i.multimedia.src
             }
          return(
            <>
             <MediaCard title={i.display_title} src={src}/>
            </>
          )
        })}
           </main>
        </InfiniteScroll>
     </>
  )
}
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?offset=0&order=by-opening-date&api-key=4uougZbpvnTcVHrWOGPremISgSzQGYod`)
  const data = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      result:data.results
    },
  }
}