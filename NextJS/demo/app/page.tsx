
export default function Home({time}:any) {
  return (
    <div>
      <h1>Next JS server Side Rendering (SSR) demo!</h1>
      <p>Server time: {time}</p>
      <button onClick={()=>alert("test")}>test</button>
    </div>
  );
}

export async function getServersideProp() {
    return{
        props:{
            time: new Date().toISOString()
        }
    }
}
