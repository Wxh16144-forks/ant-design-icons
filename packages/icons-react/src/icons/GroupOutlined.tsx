// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import GroupOutlinedSvg from '@ant-design/icons-svg/lib/asn/GroupOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GroupOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GroupOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(GroupOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GroupOutlined';
}

export default RefIcon;