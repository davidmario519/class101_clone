import './App.css';

function App() {
  return (
    <div>
      <div className='bg-slate-50'>
      <div>
        <div className=' text-slate-400 justify-end'>setting</div>
      </div>
      <div className='m-4 flex flex-row p-1'>
        <div className='h-16 w-16 rounded-full bg-slate-400'></div>
        <div className='m-2'>
          <div>윤기완</div>
          <div>davidmario@naver.com</div>
        </div>
      </div>
      <div className='bg-green-500 m-5 p-3'>
        <div className='flex flex-row justify-between'>
          <div className='text-white text-2xl'>Lv.Amateur</div>
          <div className='text-white text-sm'>혜택보기</div>
        </div>
        <div>
          <div className='text-white'>10,000P 추가 적립시 다음 달 Lv.Professional</div>
        </div>
      </div>
      <div className='bg bg-slate-50 mx-6 my-2 flex flex-row justify-between'>
        <div className=''>내 캐시</div>
        <div className=''>기프트카드 등록</div>
      </div>
      <div className='bg bg-slate-50 mx-6 my-2 flex flex-row justify-between'>
        <div className=''>내 포인트</div>
        <div>0P</div>
      </div>
      <div className='bg bg-slate-50 mx-6 my-2 flex flex-row justify-between'>
        <div className=''>찜한 클래스</div>
      </div>
      <div className='bg bg-slate-50 mx-6 my-2 flex flex-row justify-between'>
        <div className=''>주문 내역</div>
      </div>
      <div className='bg bg-slate-50 mx-6 my-2 flex flex-row justify-between'>
        <div className=''>내 후기</div>
      </div>
    </div>
    <div className='bg-slate-200 h-5'></div>

    <div className='bg-slate-50'>
      <div className='bg bg-slate-50 mx-6 my-2 flex flex-row justify-between'>
        <div className=''>내 코칭권 사용하기</div>
      </div>
      <div className='bg bg-slate-50 mx-6 my-2 flex flex-row justify-between'>
        <div className=''>포인트 스토어</div>
      </div>
      <div className='bg bg-slate-50 mx-6 my-2 flex flex-row justify-between'>
        <div className=''>크리에이터 지원하기</div>
      </div>
      <div className='bg bg-slate-50 mx-6 my-2 flex flex-row justify-between'>
        <div className=''>문의하기</div>
      </div>
    </div>

    </div>  );
}

export default App;
