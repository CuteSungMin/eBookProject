import "./CodeTestList.css"
import { Link } from "react-router-dom";
import CodeTestListJson from "./CodeTestList.json"

const CodeTestList = () => {
    return ( 
        <section className="CodeTestSection">
            <article className="CodeTestArticle">
                <div className="CodeTestArticleDiv1">
                    <div><span className="CodeTestArticleDiv1Span">언어</span><span>초기화</span></div>
                    <div><Link to="/test"><button className="CodeTestTitleBtn">전체</button></Link></div>
                    <div><Link to="/codeTestHtml"><button className="CodeTestTitleBtn">HTML</button></Link></div>
                    <div><Link to="/codeTestCss"><button className="CodeTestTitleBtn">CSS</button></Link></div>
                    <div><Link to="/codeTestJs"><button className="CodeTestTitleBtn">JAVASCRIPT</button></Link></div>
                    <div><span className="CodeTestArticleDiv1Span">전자북 찾아보기</span><span>초기화</span></div>
                    <div><Link to="/ebook/*"><button className="CodeTestTitleBtn">전자북 페이지</button></Link></div>
                </div>
                <div className="CodeTestArticleDiv2">
                    <h1>HTML</h1>
                    {/*HTML, CSS, SCRIPT 바뀔 창들 */}
                    <div className="CodeTestArticleDiv2TableHTML">
                        <tr className="CodeTestTitle">
                            <td>중단원</td>
                            <td>주제</td>
                            <td>문제 풀기</td>
                        </tr>
                        <tr className="CodeTestText">
                            <td>중간 단계</td>
                            <td>
                                <p>{CodeTestListJson.Text.test1}</p>
                                <p>{CodeTestListJson.Text.test2}</p>
                                <p>{CodeTestListJson.Text.test3}</p>
                                <p>{CodeTestListJson.Text.test4}</p>
                                <p>{CodeTestListJson.Text.test5}</p>
                            </td>
                            <td className="CodeTestPlay">
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                            </td>
                        </tr>
                        <tr className="CodeTestText">
                            <td>상급 단계</td>
                            <td>
                                <p>{CodeTestListJson.Text.test6}</p>
                                <p>{CodeTestListJson.Text.test7}</p>
                                <p>{CodeTestListJson.Text.test8}</p>
                                <p>{CodeTestListJson.Text.test9}</p>
                                <p>{CodeTestListJson.Text.test10}</p>
                            </td>
                            <td className="CodeTestPlay">
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                                <p><span>문제 풀기</span></p>
                            </td>
                        </tr>
                    </div>
                </div>
            </article>
        </section>
     );
}
 
export default CodeTestList;