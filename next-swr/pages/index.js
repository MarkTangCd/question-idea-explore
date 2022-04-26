import useSWR, { SWRConfig } from 'swr';

const getArticles = () => {
  return fetch("https://api.juejin.cn/recommend_api/v1/tag/recommend_tag_list?aid=2608&uuid=7090852576078792226", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"100\", \"Google Chrome\";v=\"100\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://juejin.cn/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"cate_id\":\"6809635626879549454\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then((res) => res.json());
};

export async function getServerSideProps() {
  const article = await getArticles();
  return {
    props: {
      fallback: {
        '/api/article': article
      }
    }
  }
}

function List() {
  const { data } = useSWR('/api/article');
  console.log('result:');
  console.log(data);
  return (
    <div>
      <h3>List:</h3>
      <ul>
        {
          data.data.map(item => (
            <li>{item.tag_name}</li>
          ))
        }
      </ul>
    </div>
  );
}

const Index = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <div>
        <List />
      </div>
    </SWRConfig>
  )
}

export default Index;