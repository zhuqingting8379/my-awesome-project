// src/pages/CallbackPage.js
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const CallbackPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (code) {
      console.log('Authorization Code:', code);
      // 示例：发送 code 到后端（需替换为实际 API）
      window.location.href = '/';
    }
  }, [code]);

  return <div>Processing authorization...</div>;
};

export default CallbackPage;