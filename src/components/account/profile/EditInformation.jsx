import { useUpdateUserMutation } from '@/redux/features/auth/authApi';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoMdClose } from 'react-icons/io';

const EditInformation = ({ setActiveModal, activeModal }) => {
  const [updateUser, { data: result, isSuccess, error }] =
    useUpdateUserMutation();
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const department = form.department.value;
    const semester = form.semester.value;
    const roll = parseInt(form.roll.value);
    const shift = form.shift.value;
    const group = form.group.value;
    const session = form.session.value;
    const reg = parseInt(form.reg.value);
    const phone = parseInt(form.phone.value);
    const address = form.address.value;
    const data = {
      name: activeModal?.name,
      department,
      semester,
      roll,
      shift,
      group,
      session,
      reg,
      phone,
      address,
      email: activeModal?.email,
    };

    const res = await fetch(
      `http://localhost:3000/api/account/user/update-user`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    const result = await res.json();
    console.log(result);
    if (result) {
      toast.success(result.message);
      setActiveModal(false);
    }
  };

  useEffect(() => {
    if (result?.success && isSuccess) {
      toast.success('update information successfully');
      setActiveModal(false);
    }
  }, [result, isSuccess, setActiveModal]);
  return (
    <div className="fixed z-50 top-0 left-0 right-0  w-full  h-screen  bg-[#030202dc] flex justify-center items-center">
      <div className=" max-w-[1000px] mx-auto  max-h-[80vh] relative overflow-y-auto bg-white rounded-xl p-4">
        <div className=" flex justify-between items-center gap-4  cursor-pointer py-2 ">
          <h1></h1>
          <IoMdClose
            onClick={() => setActiveModal(false)}
            className="text-[22px] "
          />
        </div>
        <div className="py-2">
          s
          <div class="bg-white shadow-lg rounded-lg gap-4 p-4 w-full max-w-md max-h-full">
            <h2 class="text-center font-bold">Student Information</h2>
            <hr class="mt-1 w-48 h-1 mx-auto bg-gray-100 border-1 rounded" />
            <div class="mt-5 p-4 border rounded-lg border-gray-200 relative">
              <form onSubmit={handleSubmit} id="userForm">
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
                      name="name"
                      class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-green-800 focus:border-green-800"
                      placeholder="Enter Student Name"
                      defaultValue={activeModal?.name}
                    />
                  </div>
                  <div>
                    <label
                      for="department"
                      class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Department
                    </label>
                    <select
                      id="department"
                      name="department"
                      class="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:ring-green-800 focus:border-green-800"
                      defaultValue={activeModal?.department}
                    >
                      {activeModal?.department && (
                        <option value={activeModal?.department}>
                          {activeModal?.department}
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
                        defaultValue={activeModal?.semester}
                        class="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:ring-green-800 focus:border-green-800"
                      >
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
                        defaultValue={activeModal?.shift}
                        class="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:ring-green-800 focus:border-green-800"
                      >
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
                        defaultValue={activeModal?.roll}
                        class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-green-800 focus:border-green-800"
                        placeholder="Enter Roll"
                      />
                    </div>

                    <div>
                      <label
                        for="group"
                        class="mb-2 block text-sm font-medium text-gray-900"
                      >
                        group
                      </label>
                      <select
                        id="group"
                        name="group"
                        defaultValue={activeModal?.group}
                        class="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:ring-green-800 focus:border-green-800"
                      >
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
                        type="number"
                        id="registration"
                        name="reg"
                        defaultValue={activeModal?.reg}
                        class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-green-800 focus:border-green-800"
                        placeholder="Enter Registration"
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
                        defaultValue={activeModal?.session}
                        class="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:ring-green-800 focus:border-green-800"
                      >
                        <option value="2014-15">2014-15</option>
                        <option value="2016-17">2016-17</option>
                        <option value="2018-19">2018-19</option>
                        <option value="2020-21">2020-21</option>
                        <option value="2022-23">2022-23</option>
                        <option value="2024-25">2024-25</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="w-full">
                      <label
                        for="name"
                        class="mb-2 block text-sm w-full font-medium text-gray-900"
                      >
                        Phone
                      </label>
                      <input
                        type="number"
                        id="name"
                        name="phone"
                        defaultValue={activeModal?.phone}
                        class="bg-gray-50 w-full border-2 border-gray-300 text-gray-900 text-sm rounded-lg block  p-2.5 focus:outline-none focus:ring-green-800 focus:border-green-800"
                        placeholder="Ex: 01617650797"
                      />
                    </div>
                    <div>
                      <label
                        for="name"
                        class="mb-2 block text-sm font-medium text-gray-900"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        defaultValue={activeModal?.address}
                        class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none focus:ring-green-800 focus:border-green-800"
                        placeholder="Ex: Bogura Rajshahi"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  class="mt-8 w-full px-5 py-2.5 rounded-lg text-center text-white bg-green-700 hover:bg-green-800 hover:ring duration-300"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditInformation;
