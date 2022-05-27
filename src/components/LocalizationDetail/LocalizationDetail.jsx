import "./LocalizationDetail.css";

const LocalizationDetail = (props) => {
  return (
    <div className="detail__Wrapper">
      <div className="localization__Detail">
        <span>
          <p>Encontrada:</p>
        </span>
        <p>{props.address}</p>
      </div>
    </div>
  );
};

export default LocalizationDetail;
