import React from "react";
import clsx from "clsx";

const Bounded = React.forwardRef(
    function Bounded({ as: Comp = "section", className, children, ...restProps }, ref) {
        return (
            <Comp
                ref={ref}
                className={clsx("px-6 py-10 md:px-8 md:py-10 lg:py-10 lg:px-24", className)}
                {...restProps}
            >
                <div className="mx-auto w-full max-w-7xl">{children}</div>
            </Comp>
        );
    }
);

Bounded.displayName = "Bounded";

export default Bounded;
