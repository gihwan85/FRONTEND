import React, { useState } from 'react';

function App() {
  const [showText, setShowText] = useState(true);
  const [paraColor, setParaColor] = useState('black');
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [showImage, setShowImage] = useState(true);

  const handleAdd = () => {
    if (task.trim() === '') {
      alert('할 일을 입력하세요!');
      return;
    }
    setTodoList([...todoList, task.trim()]);
    setTask('');
  };

  const handleDelete = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      {/* 과제 2: 텍스트 숨기기 / 보이기 */}
      <section style={{ marginBottom: 40 }}>
        <button onClick={() => setShowText(false)}>숨기기</button>
        <button onClick={() => setShowText(true)}>보이기</button>
        {showText && <p>Hello, jQuery!</p>}
      </section>

      {/* 과제 3: 클릭 & 더블클릭 */}
      <section style={{ marginBottom: 40 }}>
        <p
          onClick={() => setParaColor('blue')}
          onDoubleClick={() => setParaColor('red')}
          style={{ color: paraColor, cursor: 'pointer' }}
        >
          더블클릭하거나 클릭해보세요
        </p>
      </section>

      {/* 과제 4 & 6: 할 일 리스트 + 삭제 */}
      <section style={{ marginBottom: 40 }}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={handleAdd}>추가</button>
        <ul>
          {todoList.map((item, index) => (
            <li
              key={index}
              style={{ margin: '5px 0', cursor: 'pointer' }}
              onClick={(e) => {
                if (e.target.tagName !== 'BUTTON') {
                  handleDelete(index);
                }
              }}
            >
              {item}
              <button
                style={{
                  marginLeft: 10,
                  background: 'crimson',
                  color: 'white',
                  border: 'none',
                  padding: '4px 8px',
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete(index);
                }}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* 과제 5: 이미지 토글 */}
      <section>
        <button onClick={() => setShowImage((prev) => !prev)}>이미지 토글</button>
        <br />
        <br />
        {showImage && (
          <img
            src="https://via.placeholder.com/150"
            alt="샘플 이미지"
            style={{ transition: 'opacity 0.5s' }}
          />
        )}
      </section>
    </div>
  );
}

export default App;
