import Image from "next/image";
import { memo } from "react";
import { onEventDisable } from "../../../libs/onEventDisable";
export const Logo = memo(() => {
  return (
    <h2 className="md:mt-8 mt-6 md:mb-6 mb-4">
      <div className="text-center">
        <Image
          src="/images/logo.png"
          alt="ロゴ"
          width={110}
          height={110}
          className={"mx-auto"}
          onContextMenu={onEventDisable}
          onMouseDown={onEventDisable}
          onDragStart={onEventDisable}
        />
      </div>
    </h2>
  );
});
Logo.displayName = "Logo";
