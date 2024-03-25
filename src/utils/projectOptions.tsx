import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

const RICHTEXT_OPTIONS = {
  //   BLOCKS & INLINES
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
      node;
      return <p className="py-2">{children}</p>;
    },
    [BLOCKS.HEADING_2]: (node: any, children: any) => {
      node;
      return <h2 className="blogH2">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node: any, children: any) => {
      node;
      return <h3 className="text-xl py-2">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node: any, children: any) => {
      node;
      return <h4 className="blogH4">{children}</h4>;
    },
    [BLOCKS.HEADING_5]: (node: any, children: any) => {
      node;
      return <h5 className=" text-lg py-2">{children}</h5>;
    },
    [BLOCKS.HEADING_6]: (node: any, children: any) => {
      node;
      return <h6 className="blogH6">{children}</h6>;
    },
    [BLOCKS.OL_LIST]: (node: any, children: any) => {
      node;
      return <ol className="list-decimal px-5 py-2">{children}</ol>;
    },
    [BLOCKS.UL_LIST]: (node: any, children: any) => {
      node;
      return <ul className="list-disc">{children}</ul>;
    },
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => {
      node;
      return <li className="">{children}</li>;
    },
    [INLINES.HYPERLINK]: (node: any, children: any) => {
      return (
        <a
          className=" font-montserrat-semibold-italic text-indigo-700 "
          href={node.data.uri}
        >
          {children}
        </a>
      );
    },
  },
  // MARKS
  renderMark: {
    [MARKS.CODE]: (children: any) => {
      return (
        <code className="font-mona-lisa text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-700 text-white rounded-lg p-4 pl-6 w-full overflow-auto">
          {children}
        </code>
      );
    },
    [MARKS.BOLD]: (children: any) => {
      return <b className="font-montserrat-bold">{children}</b>;
    },
    [MARKS.ITALIC]: (children: any) => {
      return <i className="font-montserrat-italic">{children}</i>;
    },
    [MARKS.UNDERLINE]: (children: any) => {
      return <u className="">{children}</u>;
    },
  },
};

export default RICHTEXT_OPTIONS;
