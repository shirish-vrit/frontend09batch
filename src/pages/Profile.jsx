import React from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

function Profile() {
  const users = [
    {
      id: 1,
      name: "shirish",
      isHero: true,
    },
    {
      id: 2,
      name: "Ramesh",
      isHero: false,
    },
  ];

  const goTo = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const isModalOpen = searchParams.get("show") === "true";
  const id = searchParams.get("id"); // 1 --string

  // useEffect(() => {
  //   fetchProducts().then((data) => {
  //     console.log(data, "Response of product");
  //   });
  // }, []);

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          console.log(e.target.files?.[0]);
        }}
      />
      Profile
      {users?.map((user, index) => {
        return (
          <div key={index}>
            <div
              style={{
                padding: "10px",
                border: "1px solid red",
                margin: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                if (isModalOpen) {
                  const search = new URLSearchParams(searchParams);
                  if (id === user?.id?.toString()) {
                    search.delete("show");
                    search.delete("id");
                  } else {
                    search.set("id", user?.id);
                  }
                  setSearchParams(search);
                } else {
                  setSearchParams({ show: "true", id: user?.id });
                }

                // goTo(`/profile/${user?.name}`);
              }}
            >
              {user?.name}
            </div>

            {isModalOpen && id?.toString() === user?.id?.toString() && (
              <div>Modal open vako case</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
