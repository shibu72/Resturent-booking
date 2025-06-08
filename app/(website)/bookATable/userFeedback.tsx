import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

function UserFeedback() {
  return (
    <>
      {
        Array(3).fill(0).map((_, i) =>
        <div key={i} className="font-kumbh border-b-2 border-[--primaryBlack] py-6">
          <div className="flex items-center space-x-6 text-[--primaryBlack] ">
            <div>
              <Image
                className="rounded-full"
                src={"/images/feedback.png"}
                alt="user image for feedback"
                width={78.75}
                height={78.75}
              />
            </div>
            <div>
              <p className="text-[1.63rem] mb-2">
                Dianne Russell.{" "}
                <span className="text-xl  text-[--secondary1]">Just now</span>
              </p>
              <span className="flex items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => {
                    return (
                      <Star
                        key={i}
                        size={29.53}
                        color="var(--secondary1)"
                        fill="var(--secondary1)"
                      />
                    );
                  })}
              </span>
            </div>
          </div>
          <p className="text-xl font-medium mt-6">
            &quot;This restaurant is truly fantastic. The food was amazing, and
            the service was exceptional. I would highly recommend this place to
            anyone looking for a great seafood experience.&quot;
          </p>
        </div>
        )
      }
    </>
  );
}

export default UserFeedback;
