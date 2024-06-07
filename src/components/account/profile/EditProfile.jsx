"use client";
import Swal from "sweetalert2";
const EditProfile = ({ userInfo, setActive }) => {
  console.log(userInfo);
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const email = userInfo?.email;
    const name = from.userName.value;
    const department = from.department.value;
    const roll = parseInt(from.roll.value);
    const phone = parseInt(from.phone.value);
    const shift = from.shift.value;
    const session = from.session.value;
    const group = from.group.value;
    const semester = from.semester.value;
    const reg = parseInt(from.registration.value);
    const address = from.address.value;
    const data = {
      email,
      name,
      department,
      roll,
      phone,
      group,
      reg,
      shift,
      session,
      semester,
      address,
    };
    try {
      const response = await fetch(
        "https://bpi-library.vercel.app/api/account/user/update-user",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();
      console.log(responseData);

      if (responseData?.success == true) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `update user seccessfully`,
          showConfirmButton: false,
          timer: 1500,
        });
        setActive(false);
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${responseData.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
        setActive(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" fixed top-0 bottom-0 left-0  z-50 right-0 w-full h-screen justify-center items-center gap-2 bg-[#00000094]">
        <div className=" pt-12">
          <div class="bg-white max-h-screen overflow-y-auto shadow-lg rounded-lg gap-4 p-4 w-full max-w-md mx-auto">
            <h2 class="text-center font-bold">Student Information</h2>
            <hr class="mt-1 w-48 h-1 mx-auto bg-gray-100 border-1 rounded" />
            <div class="mt-5 p-4 border rounded-lg border-gray-200 relative">
              <form onSubmit={HandleSubmit}>
                <div class="grid gap-4 grid-cols-1">
                  <div>
                    <label
                      for="name"
                      class="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={userInfo?.name}
                      name="userName"
                      class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-green-800 focus:border-green-800"
                      placeholder="Enter Student Name"
                    />
                  </div>

                  <div>
                    <label
                      for="department"
                      class="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      class="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:ring-green-800 focus:border-green-800"
                    >
                      {userInfo?.department && (
                        <option value={userInfo?.department}>
                          {userInfo?.department}
                        </option>
                      )}
                      <option value="Civil Technology">Civil Technology</option>
                      <option value="Mechanical Technology">
                        Mechanical Technology
                      </option>
                      <option value="Electrical Technology">
                        Electrical Technology
                      </option>
                      <option value="Computer Technology">
                        Computer Technology
                      </option>
                      <option value="Electronics Technology">
                        Electronics Technology
                      </option>
                      <option value="RAC Technology">RAC Technology</option>
                      <option value="Power Technology">Power Technology</option>
                    </select>
                  </div>

                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        for="semester"
                        class="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Semester
                      </label>
                      <select
                        id="semester"
                        name="semester"
                        class="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:ring-green-800 focus:border-green-800"
                      >
                        {" "}
                        {userInfo?.semester && (
                          <option value={userInfo?.semester}>
                            {userInfo?.semester}
                          </option>
                        )}
                        <option value="1st">1st</option>
                        <option value="2nd">2nd</option>
                        <option value="3rd">3rd</option>
                        <option value="4th">4th</option>
                        <option value="5th">5th</option>
                        <option value="6th">6th</option>
                        <option value="7th">7th</option>
                        <option value="8th">8th</option>
                      </select>
                    </div>
                    <div>
                      <label
                        for="shift"
                        class="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Shift
                      </label>
                      <select
                        id="shift"
                        name="shift"
                        class="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:ring-green-800 focus:border-green-800"
                      >
                        {userInfo?.shift && (
                          <option value={userInfo?.shift}>
                            {userInfo?.shift}
                          </option>
                        )}
                        <option value="1st">1st</option>
                        <option value="2nd">2nd</option>
                      </select>
                    </div>

                    <div>
                      <label
                        for="roll"
                        class="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Roll
                      </label>
                      <input
                        type="number"
                        id="roll"
                        name="roll"
                        defaultValue={userInfo?.roll}
                        class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-green-800 focus:border-green-800"
                        placeholder="Enter Roll"
                        required
                      />
                    </div>

                    <div>
                      <label
                        for="group"
                        class="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Group
                      </label>
                      <select
                        id="group"
                        name="group"
                        class="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:ring-green-800 focus:border-green-800"
                      >
                        {userInfo?.group && (
                          <option value={userInfo?.group}>
                            {userInfo?.group}
                          </option>
                        )}
                        <option value="N/A">N/A</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                      </select>
                    </div>
                    <div>
                      <label
                        for="registration"
                        class="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Registration
                      </label>
                      <input
                        defaultValue={userInfo?.reg}
                        type="number"
                        id="registration"
                        name="registration"
                        class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-green-800 focus:border-green-800"
                        placeholder="Enter Registration"
                        required
                        maxlength="10"
                      />
                    </div>

                    <div>
                      <label
                        for="session"
                        class="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Session
                      </label>
                      <select
                        id="session"
                        name="session"
                        class="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:ring-green-800 focus:border-green-800"
                      >
                        {userInfo?.session && (
                          <option value={userInfo?.session}>
                            {userInfo?.session}
                          </option>
                        )}
                        <option value="2014-15">2014-15</option>
                        <option value="2016-17">2016-17</option>
                        <option value="2018-19">2018-19</option>
                        <option value="2020-21">2020-21</option>
                        <option value="2022-23">2022-23</option>
                        <option value="2024-25">2024-25</option>
                      </select>
                    </div>
                    <div>
                      <label
                        for="name"
                        class="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Phone
                      </label>
                      <input
                        type="number"
                        id="name"
                        defaultValue={userInfo?.phone}
                        name="phone"
                        class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-green-800 focus:border-green-800"
                        placeholder="Enter Student phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      for="name"
                      class="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Addrss
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="address"
                      defaultValue={userInfo?.address}
                      class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-green-800 focus:border-green-800"
                      placeholder="Enter Student Addrss"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  class="mt-8 w-full px-5 py-2.5 rounded-lg text-center text-white bg-green-700 hover:bg-green-800 hover:ring duration-300"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setActive(false)}
                  type="text"
                  class="mt-4 w-full px-5 py-2.5 rounded-lg text-center text-white bg-red-700 hover:bg-red-800 hover:ring duration-300"
                >
                  Cencal
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
