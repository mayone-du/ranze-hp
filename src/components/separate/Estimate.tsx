import { Button } from "@material-ui/core";

const Estimate: React.VFC = () => {
  return (
    <>
      <div className="bg-gray-100">
        <h3>見積もりシート</h3>
        <div>
          <Button variant="outlined">イラスト</Button>
          <Button variant="outlined">LINEスタンプ</Button>
          <Button variant="outlined">名刺</Button>
        </div>
        <table>
          <tr>
            <td className="border border-black">項目</td>
            <td className="border border-black">料金</td>
            <td className="border border-black">
              <Button>チェック</Button>
            </td>
          </tr>
          <tr>
            <td className="border border-black">オプション1</td>
            <td className="border border-black">1,000円</td>
            <td className="border border-black">
              <Button>チェック</Button>
            </td>
          </tr>
          <tr>
            <td className="border border-black">オプション1</td>
            <td className="border border-black">1,000円</td>
            <td className="border border-black">
              <Button>チェック</Button>
            </td>
          </tr>
          <tr>
            <td className="border border-black">オプション1</td>
            <td className="border border-black">1,000円</td>
            <td className="border border-black">
              <Button>チェック</Button>
            </td>
          </tr>
          <tr>
            <td className="border border-black">オプション1</td>
            <td className="border border-black">1,000円</td>
            <td className="border border-black">
              <Button>チェック</Button>
            </td>
          </tr>
          <tr>
            <td className="border border-black">オプション1</td>
            <td className="border border-black">1,000円</td>
            <td className="border border-black">
              <Button>チェック</Button>
            </td>
          </tr>
          <tr>
            <td className="border border-black">合計</td>
          </tr>
          <tr>
            <td className="border border-black">30,000円</td>
          </tr>
        </table>

        <form className="pt-10">
          <h3>料金シミュレーター</h3>
          <select className="bg-red-100">
            <option value="1">オプション1</option>
            <option value="2">オプション2</option>
            <option value="3">オプション3</option>
          </select>
          <Button variant="outlined">料金を算出する</Button>
        </form>
      </div>
    </>
  );
};

export { Estimate };
