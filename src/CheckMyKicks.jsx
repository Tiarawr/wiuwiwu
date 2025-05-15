import React from "react";

const CheckMyKicks = () => {
  return (
    <div className="w-full min-h-screen bg-[#B56868] overflow-y-auto relative pb-64">
      {/* Header */}
      <div className="absolute left-20 top-10">
        <h1 className="text-white text-6xl font-semibold font-['Poppins'] leading-tight">
          How checkmykicks
          <br /> Works ?
        </h1>
      </div>

      {/* Steps */}
      <div className="absolute top-[215px] left-0 w-full">
        {/* Step 1 */}
        <div className="flex relative mb-16">
          <div className="w-[56px] h-[70px] ml-16 text-white text-8xl font-bold font-['Open Sans'] text-center">
            1
          </div>
          <div className="ml-5">
            <h2 className="text-white text-4xl font-semibold font-['Poppins']">
              Upload Photo
            </h2>
            <p className="text-white text-xl font-normal font-['Open Sans'] mt-5 max-w-[537px]">
              Take clear, high-quality images of your item following our
              guidelines front view, materials, tags, and other key details.
            </p>
          </div>
          <div className="absolute right-[200px] top-0 w-[30px] h-[30px] bg-white rounded-full"></div>
          <div className="absolute right-[188px] top-[30px] w-[4px] h-[156px] bg-white"></div>

          {/* Visual aid for step 1 */}
          <div className="absolute right-16 top-0 w-[300px] h-[150px] bg-white rounded-[20px] flex flex-col items-center justify-center">
            <div className="w-[30px] h-[28px] border-2 border-[#41415A] mx-auto mb-4"></div>
            <button className="w-[200px] h-[35px] bg-[#46ADAC] rounded-[10px] text-white text-base font-semibold font-['Poppins']">
              Upload Photo
            </button>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex relative mb-16">
          <div className="w-[56px] h-[70px] ml-16 text-white text-8xl font-bold font-['Open Sans'] text-center">
            2
          </div>
          <div className="ml-5">
            <h2 className="text-white text-4xl font-semibold font-['Poppins']">
              Payment
            </h2>
            <p className="text-white text-xl font-normal font-['Open Sans'] mt-5 max-w-[537px]">
              Select the service you want and complete the payment to
              immediately start the authentication process.
            </p>
          </div>
          <div className="absolute right-[200px] top-0 w-[30px] h-[30px] bg-white rounded-full"></div>
          <div className="absolute right-[188px] top-[30px] w-[4px] h-[156px] bg-white"></div>

          {/* Visual aid for step 2 */}
          <div className="absolute right-16 top-0 w-[300px] h-[150px] bg-white rounded-[20px] flex flex-col items-start justify-center p-8">
            <div className="w-[235px] h-[20px] bg-[#D9D9D9] mb-2"></div>
            <div className="flex w-full justify-between mb-5">
              <div className="w-[115px] h-[20px] bg-[#D9D9D9]"></div>
              <div className="w-[115px] h-[20px] bg-[#D9D9D9]"></div>
            </div>
            <button className="w-[130px] h-[35px] bg-[#46ADAC] rounded-[10px] text-white text-base font-semibold font-['Poppins'] mx-auto">
              Pay
            </button>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex relative mb-16">
          <div className="w-[56px] h-[70px] ml-16 text-white text-8xl font-bold font-['Open Sans'] text-center">
            3
          </div>
          <div className="ml-5">
            <h2 className="text-white text-4xl font-semibold font-['Poppins']">
              Expert Check
            </h2>
            <p className="text-white text-xl font-normal font-['Open Sans'] mt-5 max-w-[537px]">
              Our team of experienced authenticators will carefully review your
              submission using a multi-step process enhanced with Professional
              support.
            </p>
          </div>
          <div className="absolute right-[200px] top-0 w-[30px] h-[30px] bg-white rounded-full"></div>
          <div className="absolute right-[188px] top-[30px] w-[4px] h-[175px] bg-white"></div>

          {/* Visual aid for step 3 */}
          <div className="absolute right-16 top-0 w-[300px] h-[150px] bg-white rounded-[20px] flex flex-col items-center justify-between">
            <div className="flex justify-center items-center h-full">
              <div className="w-[28px] h-[28px] relative">
                <div className="w-[14px] h-[13px] absolute top-1 left-[5px] border-2 border-[#41415A]"></div>
                <div className="w-[14px] h-[13px] absolute top-[14px] left-[5px] border-2 border-[#41415A]"></div>
              </div>
            </div>
            <div className="w-full h-[66px] bg-[#46ADAC] rounded-b-[20px] flex items-center justify-center">
              <p className="text-white text-base font-medium font-['Poppins']">
                Waiting for results
              </p>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex relative mt-16">
          <div className="w-[56px] h-[70px] ml-16 text-white text-8xl font-bold font-['Open Sans'] text-center">
            4
          </div>
          <div className="ml-5">
            <h2 className="text-white text-4xl font-semibold font-['Poppins']">
              Receive Results
            </h2>
            <p className="text-white text-xl font-normal font-['Open Sans'] mt-5 max-w-[537px]">
              Receive an accurate and <br />
              easy-to-understand verdict: Genuine or Replica, along with an
              official digital certificate.
            </p>
          </div>
          <div className="absolute right-[200px] top-0 w-[30px] h-[30px] bg-white rounded-full"></div>
          <div className="absolute right-[188px] top-[30px] w-[4px] h-[123px] bg-white"></div>

          {/* Visual aid for step 4 */}
          <div className="absolute right-16 top-0 w-[300px] h-[150px] bg-white rounded-[20px] flex">
            {/* Certificate */}
            <div className="w-1/2 flex items-center justify-center">
              <div className="w-[103px] h-[110px] bg-white border border-[#EBEBEB] relative p-1">
                {/* Certificate title */}
                <div className="text-center text-black text-[4px] font-semibold font-['Poppins'] mt-2">
                  CERTIFICATE OF AUTHENTICITY
                </div>

                {/* Item Name */}
                <div className="text-[#444343] text-[2px] font-semibold font-['Poppins'] mt-2">
                  ITEM NAME
                </div>
                <div className="w-full h-[11px] bg-[#E0E8F0] rounded-[4px] mt-1"></div>

                {/* Certificate Owner */}
                <div className="text-[#444343] text-[2px] font-semibold font-['Poppins'] mt-2">
                  Certificate owner
                </div>
                <div className="w-full h-[11px] bg-[#E0E8F0] rounded-[4px] mt-1"></div>

                {/* Verdict */}
                <div className="text-[#444343] text-[2px] font-semibold font-['Poppins'] mt-2">
                  Verdict
                </div>
                <div className="w-full h-[11px] bg-[#5CC98D] rounded-[4px] mt-1 flex items-center justify-start pl-2">
                  <span className="text-white text-[2px] font-bold font-['Poppins']">
                    AUTHENTIC
                  </span>
                </div>

                {/* Details */}
                <div className="text-[#444343] text-[2px] font-semibold font-['Poppins'] mt-2">
                  Details
                </div>
                <div className="w-full h-[32px] bg-[#E0E8F0] rounded-[4px] mt-1"></div>
              </div>
            </div>

            {/* Confirmation */}
            <div className="w-1/2 bg-[#46ADAC] rounded-r-[20px] rounded-l-[10px] flex items-center justify-center p-4">
              <p className="text-white text-base font-semibold font-['Poppins'] text-center">
                Receive your Certificate of authenticity
                <br />
                in Gmail
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckMyKicks;
