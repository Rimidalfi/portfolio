import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

const RICHTEXT_OPTIONS = {
  //   BLOCKS & INLINES
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="py-2">{children}</p>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="blogH2">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className="text-xl py-2">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <h4 className="blogH4">{children}</h4>;
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return <h5 className=" text-lg py-2">{children}</h5>;
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return <h6 className="blogH6">{children}</h6>;
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return <ol className="list-decimal px-5 py-2">{children}</ol>;
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return <ul className="list-disc">{children}</ul>;
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return <li className="">{children}</li>;
    },
    [INLINES.HYPERLINK]: (node, children) => {
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
    [MARKS.CODE]: (children) => {
      return (
        <div className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-700 text-white rounded-lg p-4 pl-6 w-full overflow-auto">
          <code className="font-mona-lisa">{children}</code>
        </div>
      );
    },
    [MARKS.BOLD]: (children) => {
      return <b className="font-montserrat-bold">{children}</b>;
    },
    [MARKS.ITALIC]: (children) => {
      return <i className="font-montserrat-italic">{children}</i>;
    },
    [MARKS.UNDERLINE]: (children) => {
      return <u className="">{children}</u>;
    },
  },
};

export default RICHTEXT_OPTIONS;
