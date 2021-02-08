mport React from "react"
import { KebabHorizontalIcon } from "@primer/octicons-react"

class ContextMenu extends React.Component {

  render = () => (
    <div className="item action ui pointing custom dropdown top right context-dropdown">
      <a className="context-menu">
        <KebabHorizontalIcon />
      </a>

      <div className="menu">
        <div
          className="item context clipboard"
          data-clipboard-text={this.props.address}
        >
          {this.props.phrases.copy_link}
        </div>

        <div
          className={`
          item
          context
          quote-reply
          ${this.props.diff && "quote-reply-diff"}
          `}
          data-target={this.props.item.id}
        >
          {this.props.phrases.quote_reply}
        </div>

        {!this.props.unitIssuesGlobalDisabled &&
          <div
            className="item context reference-issue"
            data-target={this.props.item.id}
            data-modal="#reference-issue-modal"
            data-poster={this.props.item.posterDisplayName}
            data-reference={this.props.address}
          >
            {this.props.phrases.reference_issue}
          </div>
        }

        {this.props.admin_permissions &&
          <>
            <div className="divider"></div>
            <div className="item context edit-content">
              {this.props.phrases.edit}
            </div>

            {this.props.delete && (
              <div
                className="item context delete-comment"
                data-comment-id={this.props.item.hashTag}
                data-url={`${this.props.repoLink}/comments/${this.props.item.id}/delete`}
                data-locale={this.props.phrases.delete_comment_confirm}
              >
                {this.props.phrases.delete}
              </div>
            )}
          </>
        }
      </div>
    </div>
  )
}

export default ContextMenu
