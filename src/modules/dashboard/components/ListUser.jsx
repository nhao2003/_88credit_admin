import React from "react";

const ListUser = ({ data }) => {
  console.log("User data: ", data);
  return (
    <div>
      {data.map((i, ind) => {
        return (
          <div
            key={ind}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              margin: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                padding: "0px 6px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100px",
                background: "#026D4D",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "8px",
                  height: "20px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "20px" /* 166.667% */,
                }}
              >
                {ind + 1}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                alignSelf: "stretch",
                width: "140px",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "22px",
                }}
              >
                {i.firstName + " " + i.lastName}
              </div>
            </div>
            <div
              style={{
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "22px",
                textAlign: "right",
              }}
            >
              {i.count}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListUser;
