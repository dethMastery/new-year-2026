import { useEffect, useState } from "react";

import { Card } from "../card";
import { data } from "../../modules/data";
import { Default } from "./default";

export interface childInterface {
  name: string;
  text?: number;
  custom?: 1 | "1";
  customText?: string;
}

export const Blessing = (child: childInterface) => {
  const { name, text, custom, customText } = child;

  const [image, setImage] = useState<string>("");

  const fetchBG = async () => {
    const call = await (await fetch(`https://api.waifu.pics/sfw/wave`)).json();

    window.localStorage.setItem("background", call.url);
    setImage(call.url);
  };

  useEffect(() => {
    (async () => {
      let background = window.localStorage.getItem("background");

      if (
        background === null ||
        background === "" ||
        background === undefined
      ) {
        await fetchBG();
      } else {
        setImage(background);
      }
    })();
  }, []);

  if (text !== undefined) {
    return (
      <Card>
        <div className="flex md:flex-row flex-col">
          <div className="w-1/3 flex flex-col gap-4 justify-center items-center">
            <div
              className="w-full aspect-video bg-center! bg-cover! bg-no-repeat! rounded"
              style={{ background: `url(${image})` }}
            ></div>
            <button
              className="w-full bg-living-coral text-whitesmoke hover:opacity-60 hover:cursor-pointer hover:scale-95 py-2 rounded-lg"
              onClick={() => fetchBG()}
            >
              เปลี่ยนรูป
            </button>
          </div>
          <div className="w-2/3 h-full p-4 flex flex-col gap-2">
            <p className="text-xl font-bold">ถึง {name}</p>
            <p>{data[text].text}</p>
            <p className="w-full text-right">
              ด้วยรัก <br />{" "}
              <span className="text-xl font-bold">– Suphakit P.</span>
            </p>
          </div>
        </div>
      </Card>
    );
  } else if (custom !== undefined && (custom === 1 || custom === "1")) {
    if (customText !== undefined) {
      return (
        <Card>
          <div className="flex md:flex-row flex-col">
            <div className="w-1/3 flex flex-col gap-4 justify-center items-center">
              <div
                className="w-full aspect-video bg-center! bg-cover! bg-no-repeat! rounded"
                style={{ background: `url(${image})` }}
              ></div>
              <button
                className="w-full bg-living-coral text-whitesmoke hover:opacity-60 hover:cursor-pointer hover:scale-95 py-2 rounded-lg"
                onClick={() => fetchBG()}
              >
                เปลี่ยนรูป
              </button>
            </div>
            <div className="w-2/3 h-full p-4 flex flex-col gap-2">
              <p className="text-xl font-bold">ถึง {name}</p>
              <p>{customText}</p>
              <p className="w-full text-right">
                ด้วยรัก <br />{" "}
                <span className="text-xl font-bold">– Suphakit P.</span>
              </p>
            </div>
          </div>
        </Card>
      );
    } else {
      return <Default />;
    }
  } else {
    return <Default />;
  }
};
