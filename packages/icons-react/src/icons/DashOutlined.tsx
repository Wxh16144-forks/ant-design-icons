// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import DashOutlinedSvg from '@ant-design/icons-svg/lib/asn/DashOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DashOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DashOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(DashOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DashOutlined';
}

export default RefIcon;