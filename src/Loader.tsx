import React, { ReactElement, useRef, useEffect } from 'react'
import Vivus from 'vivus'

const Loader = (): ReactElement => {
  const loaderRef = useRef<HTMLDivElement>(null)
  const loaderSvgRef = useRef<SVGSVGElement>(null)

  const animationDone = () => {
    loaderSvgRef.current?.classList.add('done')
    const ref = loaderRef
    localStorage.setItem('notFirstTime', 'true')

    setTimeout(function () {
      ref.current?.classList.add('done')
    }, 900)
  }

  useEffect(() => {
    const notFirstTime = localStorage.getItem('notFirstTime')

    if (!notFirstTime) {
      new Vivus(
        'loader-svg',
        {
          duration: 100,
          type: 'oneByOne',
        },
        animationDone
      )
    } else {
      loaderRef.current?.classList.add('done')
    }
  })

  return (
    <div id="loader" ref={loaderRef}>
      <svg
        id="loader-svg"
        ref={loaderSvgRef}
        width="280"
        height="48"
        viewBox="0 0 139 23"
        fill="#FE6955"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip-logo">
            <path
              data-ignore
              d="M9.884 22.652C7.88667 22.652 6.14133 22.2413 4.648 21.42C3.17333 20.5987 2.02533 19.46 1.204 18.004C0.401333 16.5293 0 14.812 0 12.852C0 11.172 0.289333 9.56667 0.868 8.036C1.46533 6.48667 2.31467 5.11467 3.416 3.92C4.536 2.70667 5.87067 1.75467 7.42 1.064C8.988 0.354667 10.7333 0 12.656 0C14.6907 0 16.408 0.401333 17.808 1.204C19.208 2.00667 20.272 3.08933 21 4.452C21.728 5.81467 22.092 7.34533 22.092 9.044C22.092 10.276 21.9053 11.396 21.532 12.404C21.1587 13.3933 20.664 14.252 20.048 14.98C19.432 15.6893 18.7413 16.24 17.976 16.632C17.2107 17.024 16.436 17.22 15.652 17.22C14.6627 17.22 13.9067 16.9493 13.384 16.408C12.8613 15.8667 12.5533 15.2413 12.46 14.532C11.9 15.4467 11.2747 16.128 10.584 16.576C9.912 17.0053 9.22133 17.22 8.512 17.22C7.65333 17.22 6.89733 16.8933 6.244 16.24C5.60933 15.5867 5.292 14.588 5.292 13.244C5.292 12.2547 5.488 11.2747 5.88 10.304C6.29067 9.31467 6.82267 8.41867 7.476 7.616C8.12933 6.79467 8.848 6.14133 9.632 5.656C10.4347 5.152 11.228 4.9 12.012 4.9C12.8707 4.9 13.6173 5.16133 14.252 5.684L16.044 5.068L16.744 5.544L15.064 14.868C14.9707 15.4093 15.0173 15.8387 15.204 16.156C15.4093 16.4547 15.6893 16.604 16.044 16.604C16.6973 16.604 17.3413 16.2867 17.976 15.652C18.6107 14.9987 19.1427 14.1027 19.572 12.964C20.0013 11.8067 20.216 10.472 20.216 8.96C20.216 6.328 19.5253 4.284 18.144 2.828C16.7813 1.35333 14.924 0.616 12.572 0.616C10.9667 0.616 9.52 0.942667 8.232 1.596C6.944 2.24933 5.83333 3.136 4.9 4.256C3.98533 5.376 3.28533 6.64533 2.8 8.064C2.31467 9.48267 2.072 10.9573 2.072 12.488C2.072 14.5227 2.44533 16.2307 3.192 17.612C3.93867 18.9933 4.96533 20.0387 6.272 20.748C7.59733 21.476 9.1 21.84 10.78 21.84C11.5453 21.84 12.292 21.7653 13.02 21.616C13.748 21.4667 14.4573 21.2427 15.148 20.944L15.316 21.448C14.5133 21.8213 13.6453 22.1107 12.712 22.316C11.7973 22.54 10.8547 22.652 9.884 22.652ZM10.108 15.232C10.4253 15.232 10.752 15.1573 11.088 15.008C11.424 14.84 11.7787 14.5507 12.152 14.14L13.552 6.44C13.3653 6.19733 13.1413 6.02933 12.88 5.936C12.6187 5.84267 12.3573 5.796 12.096 5.796C11.5733 5.796 11.0227 6.08533 10.444 6.664C9.884 7.24267 9.39867 8.02667 8.988 9.016C8.596 10.0053 8.4 11.116 8.4 12.348C8.4 13.3187 8.568 14.0467 8.904 14.532C9.24 14.9987 9.64133 15.232 10.108 15.232Z"
              fill="#FE6955"
            />
            <path
              data-ignore
              d="M30.5747 18.788C29.38 18.788 28.4467 18.4893 27.7747 17.892C27.1214 17.2947 26.7947 16.3427 26.7947 15.036V5.46H24.8627V5.18L25.5347 5.068C26.1134 4.93733 26.608 4.75067 27.0187 4.508C27.448 4.26533 27.868 3.93867 28.2787 3.528L30.5747 0.979999H30.8547L30.7707 4.9H33.9067V5.46H30.7427V15.54C30.7427 16.1933 30.8827 16.688 31.1627 17.024C31.4614 17.36 31.8347 17.528 32.2827 17.528C32.6747 17.528 33.02 17.4347 33.3187 17.248C33.6174 17.0427 33.916 16.772 34.2147 16.436L34.4947 16.716C34.1214 17.3507 33.608 17.8547 32.9547 18.228C32.3014 18.6013 31.508 18.788 30.5747 18.788Z"
              fill="#FE6955"
            />
            <path
              data-ignore
              d="M36.7719 18.368V18.088L37.1639 17.976C37.5185 17.8827 37.7612 17.724 37.8919 17.5C38.0412 17.276 38.1252 16.9773 38.1439 16.604V7.84C38.1439 7.42933 38.0785 7.13067 37.9479 6.944C37.8172 6.73867 37.5652 6.59867 37.1919 6.524L36.7719 6.412V6.132L41.5599 4.508L41.8399 4.788L42.0639 6.692C42.6799 6.076 43.3799 5.55333 44.1639 5.124C44.9665 4.69467 45.7972 4.48 46.6559 4.48C47.5519 4.48 48.2705 4.66667 48.8119 5.04C49.3532 5.39467 49.7639 5.95467 50.0439 6.72C50.7719 6.02933 51.5559 5.488 52.3959 5.096C53.2545 4.68533 54.0852 4.48 54.8879 4.48C56.2132 4.48 57.1839 4.79733 57.7999 5.432C58.4345 6.06667 58.7519 7.06533 58.7519 8.428V16.632C58.7519 17.36 59.0879 17.8173 59.7599 18.004L60.0679 18.088V18.368H53.5999V18.088L53.8799 18.004C54.2345 17.892 54.4772 17.724 54.6079 17.5C54.7572 17.276 54.8319 16.9773 54.8319 16.604V8.036C54.8319 7.252 54.6919 6.72 54.4119 6.44C54.1319 6.14133 53.6839 5.992 53.0679 5.992C52.5825 5.992 52.1065 6.104 51.6399 6.328C51.1919 6.53333 50.7159 6.85067 50.2119 7.28C50.3052 7.57867 50.3612 7.90533 50.3799 8.26C50.4172 8.61467 50.4359 8.988 50.4359 9.38V16.632C50.4545 17.36 50.7905 17.8173 51.4439 18.004L51.6959 18.088V18.368H45.1999V18.088L45.5919 17.976C45.9465 17.864 46.1892 17.7053 46.3199 17.5C46.4692 17.276 46.5439 16.9773 46.5439 16.604V8.064C46.5439 7.31733 46.4039 6.78533 46.1239 6.468C45.8625 6.15067 45.4052 5.992 44.7519 5.992C44.3225 5.992 43.8932 6.104 43.4639 6.328C43.0345 6.53333 42.5865 6.84133 42.1199 7.252V16.632C42.1199 17.36 42.4465 17.8173 43.0999 18.004L43.3519 18.088V18.368H36.7719Z"
              fill="#FE6955"
            />
            <path
              data-ignore
              d="M67.4938 18.788C66.7658 18.788 66.0938 18.648 65.4778 18.368C64.8804 18.088 64.4044 17.64 64.0498 17.024C63.7138 16.3893 63.5551 15.5587 63.5738 14.532L63.6578 7.336C63.6578 6.90667 63.5831 6.59867 63.4338 6.412C63.2844 6.22533 63.0511 6.09467 62.7338 6.02L62.3978 5.908V5.628L67.4098 4.648L67.6898 4.928L67.5498 8.904V15.652C67.5498 16.2493 67.7178 16.688 68.0538 16.968C68.4084 17.248 68.8471 17.388 69.3698 17.388C69.8924 17.388 70.3591 17.3133 70.7698 17.164C71.1804 17.0147 71.5911 16.7907 72.0018 16.492L72.1138 7.364C72.1138 6.93467 72.0485 6.636 71.9178 6.468C71.7871 6.28133 71.5444 6.15067 71.1898 6.076L70.9098 5.992V5.712L75.8098 4.648L76.0898 4.928L76.0058 8.904V16.492C76.0058 16.9027 76.0618 17.22 76.1738 17.444C76.2858 17.668 76.5284 17.8547 76.9018 18.004L77.1818 18.088V18.368L72.2818 18.648L72.0298 16.996C71.4138 17.5 70.7418 17.9293 70.0138 18.284C69.3044 18.62 68.4644 18.788 67.4938 18.788Z"
              fill="#FE6955"
            />
            <path
              data-ignore
              d="M79.7125 18.368V18.088L80.1045 17.976C80.7578 17.7893 81.0845 17.332 81.0845 16.604V7.84C81.0845 7.42933 81.0192 7.13067 80.8885 6.944C80.7578 6.73867 80.5058 6.59867 80.1325 6.524L79.7125 6.412V6.132L84.5005 4.508L84.7805 4.788L85.0045 6.468C85.6578 5.88933 86.3952 5.41333 87.2165 5.04C88.0378 4.66667 88.8498 4.48 89.6525 4.48C90.8845 4.48 91.8272 4.816 92.4805 5.488C93.1525 6.16 93.4885 7.18667 93.4885 8.568V16.632C93.4885 17.36 93.8432 17.8173 94.5525 18.004L94.8045 18.088V18.368H88.1965V18.088L88.5605 17.976C89.2138 17.7707 89.5405 17.3133 89.5405 16.604V7.672C89.5405 6.47733 88.9432 5.88 87.7485 5.88C86.9272 5.88 86.0312 6.29067 85.0605 7.112V16.632C85.0605 17.36 85.3872 17.8173 86.0405 18.004L86.2925 18.088V18.368H79.7125Z"
              fill="#FE6955"
            />
            <path
              data-ignore
              d="M97.384 18.368V17.92L105.028 5.46H100.8C100.315 5.46 99.932 5.59067 99.652 5.852C99.372 6.11333 99.1107 6.45867 98.868 6.888L97.86 8.764H97.58L97.776 4.9H108.976V5.292L101.5 17.808H105.896C106.493 17.808 106.932 17.668 107.212 17.388C107.492 17.108 107.753 16.7253 107.996 16.24L108.976 14.168H109.256L109.004 18.368H97.384Z"
              fill="#FE6955"
            />
            <path
              data-ignore
              d="M115.804 18.788C114.721 18.788 113.806 18.48 113.06 17.864C112.332 17.248 111.968 16.3613 111.968 15.204C111.968 14.3267 112.416 13.524 113.312 12.796C114.208 12.0493 115.617 11.4893 117.54 11.116C117.838 11.06 118.174 11.004 118.548 10.948C118.921 10.8733 119.313 10.7987 119.724 10.724V8.512C119.724 7.24267 119.565 6.356 119.248 5.852C118.949 5.32933 118.473 5.068 117.82 5.068C117.372 5.068 117.017 5.21733 116.756 5.516C116.494 5.796 116.326 6.29067 116.252 7L116.196 7.308C116.158 8.11067 115.962 8.69867 115.608 9.072C115.253 9.44533 114.814 9.632 114.292 9.632C113.806 9.632 113.405 9.48267 113.088 9.184C112.77 8.88533 112.612 8.484 112.612 7.98C112.612 7.21467 112.873 6.57067 113.396 6.048C113.937 5.52533 114.646 5.13333 115.524 4.872C116.401 4.61067 117.353 4.48 118.38 4.48C120.041 4.48 121.32 4.89067 122.216 5.712C123.13 6.51467 123.588 7.83067 123.588 9.66V15.848C123.588 16.688 123.98 17.108 124.764 17.108H125.38L125.632 17.332C125.277 17.78 124.885 18.1253 124.456 18.368C124.045 18.6107 123.457 18.732 122.692 18.732C121.87 18.732 121.217 18.5453 120.732 18.172C120.265 17.78 119.957 17.2667 119.808 16.632C119.248 17.2293 118.669 17.7427 118.072 18.172C117.493 18.5827 116.737 18.788 115.804 18.788ZM117.512 17.08C117.885 17.08 118.23 16.996 118.548 16.828C118.884 16.6413 119.276 16.3613 119.724 15.988V11.284C119.537 11.3213 119.35 11.3587 119.164 11.396C118.977 11.4333 118.762 11.4707 118.52 11.508C117.661 11.732 116.97 12.1147 116.448 12.656C115.944 13.1787 115.692 13.888 115.692 14.784C115.692 15.5493 115.869 16.128 116.224 16.52C116.578 16.8933 117.008 17.08 117.512 17.08Z"
              fill="#FE6955"
            />
            <path
              data-ignore
              d="M127.553 18.368V18.088L127.973 17.976C128.346 17.864 128.598 17.696 128.729 17.472C128.878 17.248 128.953 16.9587 128.953 16.604V7.84C128.953 7.42933 128.878 7.13067 128.729 6.944C128.598 6.73867 128.346 6.59867 127.973 6.524L127.553 6.412V6.132L132.369 4.508L132.649 4.788L132.901 7.196V7.42C133.162 6.89733 133.498 6.42133 133.909 5.992C134.338 5.544 134.805 5.18 135.309 4.9C135.832 4.62 136.345 4.48 136.849 4.48C137.558 4.48 138.1 4.676 138.473 5.068C138.846 5.46 139.033 5.95467 139.033 6.552C139.033 7.18667 138.846 7.68133 138.473 8.036C138.118 8.372 137.689 8.54 137.185 8.54C136.401 8.54 135.71 8.148 135.113 7.364L135.057 7.308C134.87 7.04667 134.656 6.90667 134.413 6.888C134.17 6.85067 133.946 6.96267 133.741 7.224C133.554 7.392 133.396 7.59733 133.265 7.84C133.153 8.064 133.041 8.32533 132.929 8.624V16.436C132.929 17.1827 133.256 17.6493 133.909 17.836L134.805 18.088V18.368H127.553Z"
              fill="#FE6955"
            />
          </clipPath>
        </defs>
        <path
          clipPath="url(#clip-logo)"
          d="M15.5001 21C13.0904 21.8334 11.751 22.549 8.50006 22C6.26705 21.3983 4.20567 20.0505 3.50006 19.5C0.810017 16.3773 1.09657 13.6834 1.00003 12.5C0.859617 10.2923 1.45251 10.1175 2.00006 6.99999C3.22951 5.06877 3.86634 4.29567 5.00006 3.49999C6.13443 2.58687 6.66536 2.17805 9.6297 0.687046C16.4807 -0.401719 15.8614 1.05237 17.6297 1.68704L19.5 3.49999C20.4514 4.69648 20.9177 5.66517 21.5 8.5C21.3498 9.61178 21.15 10.3568 20.5 12L19.5 14.5C19.1014 15.1926 18.7158 15.619 17.5 16.5L16 17C15.0796 16.793 14.6421 16.5781 14 16C13.4888 15.6381 14.217 10.4232 14.5 9.5C14.7055 8.99474 15.3057 5.26243 15.5 4.5"
          stroke="black"
          strokeWidth="3.2"
        />
        <path
          clipPath="url(#clip-logo)"
          d="M13.5 5L13 6L9.49998 5.5C8.39029 6.07325 8.55884 7.37709 8.07654 8.30611L6.57654 12.3061L7.49998 16L11 15.5L12.5 14.5V11.5L13 9L13 7"
          stroke="black"
          strokeWidth="3.5"
        />
        <path
          clipPath="url(#clip-logo)"
          d="M28.9999 0.5C28.7515 6.05687 28.6564 10.3374 28.8 16.9C29.89 18.925 31.775 18.1821 34.5 16"
          stroke="black"
          strokeWidth="4"
        />
        <path clipPath="url(#clip-logo)" d="M24.8 5H34" stroke="black" />
        <path
          clipPath="url(#clip-logo)"
          d="M39 3.5L40 16L36.5 18.5L42.5 16"
          stroke="black"
          strokeWidth="5.7"
        />
        <path
          clipPath="url(#clip-logo)"
          d="M42 6.99999L46 4.99999C46.7769 3.88371 47.4244 4.77831 48.5 8.5C48.4312 11.2581 48.4528 12.7255 48.5 13V15L47 17.5L45.5 18.5L51.5 17"
          stroke="black"
          strokeWidth="4"
        />
        <path
          clipPath="url(#clip-logo)"
          d="M50 7L53 5L56.5 6.5C56.6584 6.42026 57.2695 5.72533 57 10.5C57.2415 10.931 56.9074 11.0552 57 14.5L55.5 17C57.7537 16.8438 58.727 17.2843 60.5 18"
          stroke="black"
          strokeWidth="4.5"
        />
        <path
          clipPath="url(#clip-logo)"
          d="M62 5.50001C64.6565 5.1403 66.5026 5.04898 65.5 7.50001C65.5916 11.249 65.4609 13.3413 66 17L72 16.5C72.9758 16.1088 72.3219 16.2892 74 14.5C74.2851 11.0993 73.4666 11.9604 74.5 5.5L70.5 5.50001"
          stroke="black"
          strokeWidth="4.5"
        />
        <path
          clipPath="url(#clip-logo)"
          d="M74 16L75.5 17.5L77.5 18"
          stroke="black"
          strokeWidth="6"
        />
        <path
          clipPath="url(#clip-logo)"
          d="M79 6L81.5 4.5C82.2885 4.73725 82.635 5.06667 82.5 7.5C82.825 8.15258 83.0455 8.94983 83 17L79.5 18H86.5"
          stroke="black"
          strokeWidth="5"
        />
        <path
          clipPath="url(#clip-logo)"
          d="M84.5 7L88.5 5L91.5 7V10C91.6072 10.821 91.4308 14.4349 91.5 14.5C91.5 14.5 87.8264 18.2739 90.5 17.5C93.1736 16.7261 93.7178 17.302 95 18"
          stroke="black"
          strokeWidth="4"
        />
        <path
          clipPath="url(#clip-logo)"
          d="M97.5 9.00001C99 6.50001 97.6586 6.32266 98.5 5.50001C99.6813 5.14855 100.761 4.82112 101.755 4.59793C102.997 4.63641 103.154 4.52946 104.5 4.5C104.816 4.63496 105.5 4 105.5 4"
          stroke="black"
          strokeWidth="2"
        />
        <path
          clipPath="url(#clip-logo)"
          d="M108 4C108 4 102.012 13.5415 98.5 19.5"
          stroke="black"
          strokeWidth="3.5"
        />
        <path
          clipPath="url(#clip-logo)"
          d="M101 18H108.5L109 14"
          stroke="black"
          strokeWidth="2.2"
        />
        <path
          clipPath="url(#clip-logo)"
          d="M113.5 9.5C114.231 6.59308 115.763 5.76368 119.5 5C120.472 5.05409 120.518 6.13599 121.5 7.5C121.508 7.77542 121.802 14.659 121.5 15.5C121.674 16.3729 121.789 15.9405 122 17L126 17.5"
          stroke="black"
          strokeWidth="4"
        />
        <path
          clipPath="url(#clip-logo)"
          d="M120 11C116.634 11.463 114.814 12.242 113.5 14.5C113.873 15.307 114.04 15.8646 114 17L117 18L120 16.5"
          stroke="black"
          strokeWidth="4"
        />
        <path
          clipPath="url(#clip-logo)"
          d="M135 18L130 17L131 14C130.541 7.80311 130.246 4.0422 130 5.5H127.5"
          stroke="black"
          strokeWidth="5"
        />
        <path
          clipPath="url(#clip-logo)"
          d="M132.5 8L135.5 5.5L139.5 8"
          stroke="black"
          strokeWidth="5"
        />
      </svg>
    </div>
  )
}

export default Loader
