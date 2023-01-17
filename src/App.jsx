import React from 'react'

function App() {
  const isAdult = true;
  const isAdmin = true;
  const text = 'text';
  const text_second = <p>текст</p>;
  const text1 = <p>текст1</p>;
  const text2 = <p>текст2</p>;
  const attr = 'block';
  const str = 'block';
  const show = true;
  const arr = ['a', 'b', 'c', 'd', 'e']
  const rabs = [
    {firstName: 'Bob', lastName: 'Bobbert', days: 9, rate: 10}
  ]
  let sum = 0

  function getText(){
    return (
      <p>текст</p>
    )
  }

  function getNum1(){
    return 1
  }

  function getNum2(){
    return 2
  }

  return (
    <div>
      {/* Task 1 */}
      <p>{isAdult ? 'Вам есть 18' : 'Вам нет 18-ти'}</p>

      {/* Task 2 */}

      {isAdmin && (<div>
        <p>абзац</p>
        <p>абзац</p>
      </div>)}

      {/* Task 3 */}

      <div>
        текст
      </div>

      {/* Task 4 */}

      <div>{text}</div>

      {/* Task 5 */} 
      
      <div>
        {text_second}
      </div>
      
      {/* Task 6 */}

      <div>
        {text1}
        <p>!!!</p>
        {text2}
      </div>
      
      {/* Task 7 */}

      <div id={attr}>
        текст
      </div>
      
      {/* Task 8 */}

      <div className={attr}>
        текст
      </div>

      {/* Task 9 */}

      <div style={{borderRadius: '30px', color: 'green', border: '1px solid #000'}}>
        текст
      </div>

      <div>{show ? <div>текст1</div> : <div>текст2</div>}</div>

      {/* Task 10 */}

      <ul>
        {arr.map((item) => {
          return <li>{item}</li>
        })}
      </ul>

      {/* Task 11 */}

      {getText()}

      {/* Task 12 */}

      {getNum1() + getNum2()}
      
      {/* Task 13 */}

      
        <table>
          <tbody>
            {rabs.map((item) => {
              sum += item.rate * item.days
              return <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.days}</td>
                <td>{item.rate}</td>
                <td>{item.rate * item.days}</td>
              </tr> 
            })}
            <tr><td></td><td></td><td></td><td></td><td>{sum}</td></tr>
          </tbody>
        </table>

    </div>
  )
      }
export default App;
