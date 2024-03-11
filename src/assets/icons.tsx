/**
 * @description A library of icons
 * @param {*} props
 * @returns
 */

import { SVGAttributes } from "react";

export function ArrowLeftIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChartIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.5" clip-path="url(#clip0_1_4970)">
        <path
          d="M4.91406 6.80115V11.3746"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.02539 4.61279V11.3746"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.085 9.2179V11.3746"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.1235 1.33337H4.87586C2.69809 1.33337 1.33301 2.87476 1.33301 5.05681V10.9433C1.33301 13.1253 2.69174 14.6667 4.87586 14.6667H11.1235C13.3076 14.6667 14.6663 13.1253 14.6663 10.9433V5.05681C14.6663 2.87476 13.3076 1.33337 11.1235 1.33337Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_4970">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function CloseIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="16" cy="16" r="16" fill="#E9EDF1" />
      <path
        d="M22 10L10 22M22 22L10 10"
        stroke="#0019FF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Cog6ToothIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ComputerIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.33301 1.33337H6.66634C4.48019 1.33337 3.38711 1.33337 2.61228 1.87592C2.32561 2.07664 2.07627 2.32598 1.87555 2.61265C1.33301 3.38748 1.33301 4.48055 1.33301 6.66671C1.33301 8.85284 1.33301 9.94591 1.87555 10.7208C2.07627 11.0074 2.32561 11.2568 2.61228 11.4575C3.38711 12 4.48019 12 6.66634 12H9.33301C11.5191 12 12.6122 12 13.3871 11.4575C13.6737 11.2568 13.9231 11.0074 14.1238 10.7208C14.6663 9.94591 14.6663 8.85284 14.6663 6.66671C14.6663 4.48055 14.6663 3.38748 14.1238 2.61265C13.9231 2.32598 13.6737 2.07664 13.3871 1.87592C12.6122 1.33337 11.5191 1.33337 9.33301 1.33337Z"
        stroke={props.color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.33301 10H8.66634"
        stroke={props.color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.66634 14.6667L9.45601 14.3874C8.98187 13.7579 8.86427 12.7963 9.16421 12M6.33301 14.6667L6.54334 14.3874C7.01747 13.7579 7.13507 12.7963 6.83514 12"
        stroke={props.color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4.66699 14.6666H11.3337"
        stroke={props.color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DiscountIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.5">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.19618 4.70401C3.19618 3.87134 3.87085 3.19667 4.70352 3.19601H5.38952C5.78752 3.19601 6.16885 3.03801 6.45152 2.75801L6.93085 2.27801C7.51818 1.68734 8.47285 1.68467 9.06352 2.27201L9.06418 2.27267L9.07018 2.27801L9.55018 2.75801C9.83285 3.03867 10.2142 3.19601 10.6122 3.19601H11.2975C12.1302 3.19601 12.8055 3.87067 12.8055 4.70401V5.38867C12.8055 5.78667 12.9628 6.16867 13.2435 6.45134L13.7235 6.93134C14.3142 7.51867 14.3175 8.47334 13.7302 9.06401L13.7295 9.06467L13.7235 9.07067L13.2435 9.55067C12.9628 9.83267 12.8055 10.214 12.8055 10.612V11.298C12.8055 12.1307 12.1309 12.8053 11.2982 12.8053H10.6109C10.2129 12.8053 9.83085 12.9633 9.54885 13.244L9.06885 13.7233C8.48218 14.314 7.52818 14.3173 6.93752 13.7313C6.93685 13.7307 6.93618 13.73 6.93552 13.7293L6.92952 13.7233L6.45018 13.244C6.16818 12.9633 5.78618 12.806 5.38818 12.8053H4.70352C3.87085 12.8053 3.19618 12.1307 3.19618 11.298V10.6107C3.19618 10.2127 3.03818 9.83134 2.75752 9.54934L2.27818 9.06934C1.68752 8.48267 1.68418 7.52867 2.27085 6.93801C2.27085 6.93734 2.27152 6.93667 2.27218 6.93601L2.27818 6.93001L2.75752 6.45001C3.03818 6.16734 3.19618 5.78601 3.19618 5.38734V4.70401Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.28711 9.71451L9.71378 6.28784"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.66309 9.66663H9.66909"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.33008 6.33337H6.33608"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function DocumentTextIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Hamburger(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="32"
      height="21"
      viewBox="0 0 32 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="menu-icon">
        <rect id="Rectangle 19" width="32" height="3" rx="1.5" fill="#0019FF" />
        <rect
          id="Rectangle 19 Copy"
          y="9"
          width="32"
          height="3"
          rx="1.5"
          fill="#0019FF"
        />
        <rect
          id="Rectangle 19 Copy 2"
          y="18"
          width="32"
          height="3"
          rx="1.5"
          fill="#0019FF"
        />
      </g>
    </svg>
  );
}

export function ProfileIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.98712 11.7886C3.7641 11.7886 1.01172 12.2759 1.01172 14.2275C1.01172 16.179 3.74664 16.6838 6.98712 16.6838C10.2101 16.6838 12.9617 16.1957 12.9617 14.2449C12.9617 12.2941 10.2276 11.7886 6.98712 11.7886Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.98694 9.00498C9.10202 9.00498 10.8163 7.2899 10.8163 5.17482C10.8163 3.05974 9.10202 1.34546 6.98694 1.34546C4.87186 1.34546 3.15676 3.05974 3.15676 5.17482C3.14964 7.28276 4.85281 8.99784 6.95996 9.00498H6.98694Z"
        stroke="black"
        strokeWidth="1.42857"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RetentionJourneyIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.5">
        <path
          d="M9.49074 3.52786C9.49074 3.18128 9.49074 3.00799 9.4526 2.86581C9.34927 2.47998 9.04787 2.17862 8.66207 2.07524C8.28767 1.97492 7.71234 1.97492 7.33794 2.07524C6.95214 2.17862 6.65077 2.47998 6.54738 2.86581C6.50929 3.00799 6.50929 3.18128 6.50929 3.52786C6.50929 4.23059 6.50929 6.07267 6.29098 6.29098C6.07267 6.50929 4.23059 6.50929 3.52786 6.50929C3.18128 6.50929 3.00799 6.50929 2.86581 6.54738C2.47998 6.65077 2.17862 6.95214 2.07524 7.33794C1.97492 7.71234 1.97492 8.28767 2.07524 8.66207C2.17862 9.04787 2.47998 9.34927 2.86581 9.4526C3.00799 9.49074 3.18128 9.49074 3.52786 9.49074C4.23059 9.49074 6.07267 9.49074 6.29098 9.709C6.50929 9.92734 6.50929 10.2787 6.50929 10.9814C6.50929 11.328 6.50929 12.9921 6.54738 13.1342C6.65077 13.52 6.95214 13.8214 7.33794 13.9247C7.71234 14.0251 8.28767 14.0251 8.66207 13.9247C9.04787 13.8214 9.34927 13.52 9.4526 13.1342C9.49074 12.9921 9.49074 11.328 9.49074 10.9814C9.49074 10.2787 9.49074 9.92734 9.709 9.709C9.92734 9.49074 11.7694 9.49074 12.4721 9.49074C12.8187 9.49074 12.9921 9.49074 13.1342 9.4526C13.52 9.34927 13.8214 9.04787 13.9247 8.66207C14.0251 8.28767 14.0251 7.71234 13.9247 7.33794C13.8214 6.95214 13.52 6.65077 13.1342 6.54738C12.9921 6.50929 12.8187 6.50929 12.4721 6.50929C11.7694 6.50929 9.92734 6.50929 9.709 6.29098C9.49074 6.07267 9.49074 4.23059 9.49074 3.52786Z"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function SmartPhoneIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.33301 6.00004C3.33301 3.80015 3.33301 2.70021 4.01643 2.01679C4.69984 1.33337 5.79979 1.33337 7.99967 1.33337C10.1995 1.33337 11.2995 1.33337 11.9829 2.01679C12.6663 2.70021 12.6663 3.80015 12.6663 6.00004V10C12.6663 12.1999 12.6663 13.2998 11.9829 13.9833C11.2995 14.6667 10.1995 14.6667 7.99967 14.6667C5.79979 14.6667 4.69984 14.6667 4.01643 13.9833C3.33301 13.2998 3.33301 12.1999 3.33301 10V6.00004Z"
        stroke={props.color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.33301 12.6666H8.66634"
        stroke={props.color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 1.33337L6.05933 1.68939C6.18792 2.4609 6.25221 2.84666 6.51679 3.0814C6.7928 3.32627 7.18407 3.33337 8 3.33337C8.81593 3.33337 9.2072 3.32627 9.4832 3.0814C9.7478 2.84666 9.81207 2.4609 9.94067 1.68939L10 1.33337"
        stroke={props.color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Squares2X2Icon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UserStatusIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 21.9506C12.6711 21.9833 12.3375 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 12.3375 21.9833 12.6711 21.9506 13"
        stroke={props.color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.5 17C8.90247 15.5311 11.0212 14.9041 13 15.1941M14.4951 9.5C14.4951 10.8807 13.3742 12 11.9915 12C10.6089 12 9.48797 10.8807 9.48797 9.5C9.48797 8.11929 10.6089 7 11.9915 7C13.3742 7 14.4951 8.11929 14.4951 9.5Z"
        stroke={props.color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18.5 22C20.433 22 22 20.433 22 18.5C22 16.567 20.433 15 18.5 15C16.567 15 15 16.567 15 18.5C15 20.433 16.567 22 18.5 22Z"
        stroke={props.color}
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function WaitListIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.66699 6.18969C5.77811 4.85685 6.88919 5.24693 8.00033 6.22214C9.11146 7.19732 10.2225 7.58745 11.3337 6.25459M4.66699 9.74525C5.77811 8.41239 6.88919 8.80252 8.00033 9.77772C9.11146 10.7529 10.2225 11.143 11.3337 9.81012"
        stroke="grey"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.66699 8.00008C1.66699 5.01452 1.66699 3.52174 2.59449 2.59424C3.52199 1.66675 5.01477 1.66675 8.00033 1.66675C10.9859 1.66675 12.4787 1.66675 13.4062 2.59424C14.3337 3.52174 14.3337 5.01452 14.3337 8.00008C14.3337 10.9856 14.3337 12.4784 13.4062 13.4059C12.4787 14.3334 10.9859 14.3334 8.00033 14.3334C5.01477 14.3334 3.52199 14.3334 2.59449 13.4059C1.66699 12.4784 1.66699 10.9856 1.66699 8.00008Z"
        stroke="grey"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
