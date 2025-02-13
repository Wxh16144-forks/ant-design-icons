// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import RightSquareFilledSvg from '@ant-design/icons-svg/lib/asn/RightSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RightSquareFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RightSquareFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(RightSquareFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RightSquareFilled';
}

export default RefIcon;