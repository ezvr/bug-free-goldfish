import './App.css';
import FirstComponent, { SecondComponent, ThirdComponent } from './components/FirstComponent';

function App({array5}) {

  const array1 = [1, 2, 3, 4]

  const array2 = [
    {
      title: "naslov1",
      text: "text1",
    },
    {
      title: "naslov2",
      text: "text2",
    },
    {
      title: "naslov3",
      text: "text3",
    },
    {
      title: "naslov4",
      text: "text4",
    }

  ]

  const array3 = array2.map((item) => {

    console.log(item.title)
    return(
      <ThirdComponent title={item.title} text={item.text}> </ThirdComponent>
    )
  }
  )
  console.log(array3)


  return (
    <div className="App">
      <header className="App-header">
        test
        <FirstComponent prop1={array1[3]} ><h1>hello</h1></FirstComponent>
        <SecondComponent prop2={array1[1]} prop1={array2} />
        {array3}
      </header>
    </div>
  );
}

export default App;
