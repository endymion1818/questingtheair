<script type="text/template" id="tpl-post-item">
    <%= content.rendered %>
</script>
<script type="text/template" id="tpl-post-list-item">
    <a href="<%= link %>" title="<%= title.rendered %>"><%= title.rendered %></a>
    <%= excerpt.rendered %>
    <a class="button button-main" href="<%= link %>" title="<%= title.rendered %>">View post</a>
    <hr/>
</script>
