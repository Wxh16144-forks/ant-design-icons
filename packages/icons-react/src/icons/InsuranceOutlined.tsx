// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import InsuranceOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsuranceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InsuranceOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InsuranceOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(InsuranceOutlined);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'InsuranceOutlined';
}

export default RefIcon;