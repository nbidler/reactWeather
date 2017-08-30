var React = require('react');

var errorModal = React.createClass({
    componentDidMount: function () {
        var modal = new Foundation.Reveal( $('#error-modal') );
        modal.open();
    },

    render: function () {
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal>
                <h4>Error title</h4>
                <p>Error message - tbd</p>
                <p>
                    <button className="button hollow" data-close>
                        Okay
                    </button>
                </p>
            </div>
        )
    }
});

module.exports = errorModal;