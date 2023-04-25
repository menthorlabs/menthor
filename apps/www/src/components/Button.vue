<script setup>
defineProps({
  type: {
    type: String,
    default: "button",
  },
  text: {
    type: String,
    default: "Sample Text",
  },
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "base",
  },
  iconLeft: {
    type: [String, Array, Object],
    default: null,
  },
  iconRight: {
    type: [String, Array, Object],
    default: null,
  },
  iconSize: {
    type: String,
    default: "base",
  },
  fill: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const variants = {
  primary:
    "bg-gradient-to-r from-[#3CA4E0] to-[#4E62D8] text-white hover:[background:linear-gradient(86.42deg,_#86B9E4_2.94%,_#808BDC_50.83%,_#808CDC_97.43%)] focus:ring focus:ring-blue-400",
  secondary:
    "bg-gradient-to-r from-[#5E59EC] to-[#1F2B38] text-white hover:[background:linear-gradient(90deg,_#7E7AEF_0%,_#4D5662_100%)] focus:ring focus:ring-primary-300",
  tertiary:
    "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring focus:ring-gray-100",
  outline:
    "bg-white text-gray-800 ring-1 ring-inset ring-gray-200 hover:bg-gray-800 hover:ring-gray-800 hover:text-white",
  "outline-gradient":
    "bg-white text-gray-800 ring-1 ring-inset ring-primary-600 hover:bg-primary-800 hover:ring-gray-800",
  link: "bg-white text-primary-600 hover:text-primary-700",
  danger:
    "bg-red-500 text-white hover:bg-red-600 focus:ring focus:ring-red-400",
  success:
    "bg-green-500 text-white hover:bg-green-600 focus:ring focus:ring-green-400",
  disabled:
    "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring focus:ring-gray-100",
}

const sizes = {
  xs: "py-2 px-3 rounded-lg text-xs font-medium leading-[18px]",
  sm: "py-2 px-3 rounded-lg text-sm font-medium leading-[21px]",
  base: "py-[10px] px-5 rounded-lg text-sm font-medium leading-[21px]",
  lg: "py-3 px-5 rounded-lg text-base font-medium leading-[24px]",
  xl: "py-[14px] px-6 rounded-lg text-base font-medium leading-[24px]",
}

const iconSizes = {
  sm: "!w-[12px] !h-[12px]",
  base: "!w-[14px] !h-[14px]",
  lg: "!w-[20px] !h-[20px]",
}

</script>

<template>
  <button
    :type="type"
    class="group flex items-center justify-center h-fit outline-none transition-all"
    :class="[
      variants[variant],
      sizes[size],
      { 'w-full': fill, 'w-fit': !fill },
      { 'pointer-events-none': loading || variant === 'disabled' },
    ]"
  >
    <div
      class="mr-2 flex items-center justify-center"
      :class="[iconSizes[iconSize]]"
    >
      <slot name="append-left">
        <i :class="`fa-solid fa-${iconLeft}`" />
      </slot>
    </div>
    <div class="whitespace-nowrap">
      {{ text }}
    </div>
  </button>
</template>