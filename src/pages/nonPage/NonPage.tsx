import { Link } from "react-router-dom";
import * as S from "./StyleNonPage";
import { BiHome } from "react-icons/bi";

const NonPage = () => {
  return (
    <S.NonPageContainer>
      <S.NonPageTitle>없는 페이지입니다.</S.NonPageTitle>
      <Link to="/">
        <BiHome size="40" />
      </Link>
    </S.NonPageContainer>
  );
};

export default NonPage;
